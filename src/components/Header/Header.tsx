import { useContext, useEffect, useState } from "react";
import {
  HeaderWrapper,
  LogoWrapper,
  LogoImage,
  Navigation,
  Button,
  Container,
  SearchWrapper,
  SearchNavigationWrapper,
} from "@styles/components";
import logo from "@assets/images/Logotype.png";
import burger from "@assets/icons/burger-button.svg";
import BurgerMenu from "@components/Burger/BurgerMenu";
import { menuData } from "@utils/data";
import Search from "@components/ui/Search/Search";
import { findPostsByText } from "@utils/functions";
import { PostDataContext } from "@/App";

const Header = () => {
  const { setFindedPosts, posts, setActivateSearch } =
    useContext(PostDataContext);
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [accordion, setAccordion] = useState<number>(-1);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.style.overflow = isOpen ? "hidden" : "visible";
    let lastScrollTop = 0;
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;

      if (currentScrollTop < 200) {
        setIsMenuVisible(true);
      } else if (lastScrollTop > currentScrollTop) {
        setIsMenuVisible(true);
      } else {
        setIsMenuVisible(false);
      }

      lastScrollTop = currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (e.target.value) {
      setActivateSearch(true);
      const findedPosts = findPostsByText(e.target.value, posts);
      setFindedPosts(findedPosts);
    } else {
      setActivateSearch(false);
      setFindedPosts([]);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setAccordion(-1);
  };

  const toggleAccordion = (index: number) => {
    if (index === accordion) {
      setAccordion(-1);
      return;
    }
    setAccordion(index);
  };

  return (
    <HeaderWrapper visible={isMenuVisible ? "true" : "false"}>
      <Container>
        <LogoWrapper>
          <Button onClick={toggleMenu}>
            <img src={burger} alt="burger-button" />
          </Button>
          <LogoImage src={logo} alt="logotype" />
          <SearchWrapper>
            <Search
              type="text"
              placeholder="Search Post"
              name="search"
              value={search}
              onChange={handleChange}
            />
          </SearchWrapper>
        </LogoWrapper>
      </Container>
      <BurgerMenu
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        accordion={accordion}
        toggleAccordion={toggleAccordion}
      />
      <Navigation>
        <SearchNavigationWrapper>
          <Search
            type="text"
            placeholder="Search Post"
            name="search"
            value={search}
            onChange={handleChange}
          />
        </SearchNavigationWrapper>

        <ul>
          {menuData.map((item, index) => (
            <li key={index}>
              <a href="#">{item.link}</a>
              {item.content.length !== 0 && (
                <ul>
                  {item.content.map((item, index) => (
                    <li key={index}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </Navigation>
    </HeaderWrapper>
  );
};

export default Header;
