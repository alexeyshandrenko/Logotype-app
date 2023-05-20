import { FC } from "react";
import { Menu, MenuContent, Upper } from "@styles/components";
import logo from "@assets/images/logotype.png";
import close from "@assets/icons/close-icon.svg";
import { menuData } from "@utils/data";

interface BurgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  accordion: number;
  toggleAccordion: (index: number) => void;
}

const BurgerMenu: FC<BurgerMenuProps> = ({
  isOpen,
  toggleMenu,
  accordion,
  toggleAccordion,
}) => {
  return (
    <>
      <Menu isopen={isOpen ? "true" : "false"} onClick={toggleMenu}>
        <MenuContent
          onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}
        >
          <Upper>
            <img src={logo} alt="logotype" />
            <button onClick={toggleMenu}>
              <img src={close} alt="close-icon" />
            </button>
          </Upper>
          <ul>
            {menuData.map((item, index) => (
              <li key={index} onClick={() => toggleAccordion(index)}>
                <a className={accordion === index ? "opened" : ""} href="#">
                  {item.link}
                </a>
                {item.content.length !== 0 && (
                  <ul className={accordion === index ? "active" : ""}>
                    {item.content.map((item, index) => (
                      <li
                        key={index}
                        onClick={(e: React.MouseEvent<HTMLElement>) =>
                          e.stopPropagation()
                        }
                      >
                        <a href="#" onClick={toggleMenu}>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </MenuContent>
      </Menu>
    </>
  );
};

export default BurgerMenu;
