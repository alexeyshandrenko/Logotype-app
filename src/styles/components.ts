import styled from "styled-components";
import { baseTheme } from "./theme";
import svgIcon from "@assets/icons/arrow.svg";
import arrowSmall from "@assets/icons/arrow-small.svg";
import oval from "@assets/icons/oval.svg";

interface HeaderProps {
  visible: string;
}

interface BurgerMenuProps {
  isopen: string;
}

// wrapper

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// container

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  @media ${baseTheme.media.extraLarge} {
    max-width: 1160px;
  }
  @media ${baseTheme.media.large} {
    max-width: 992px;
    padding: 0 40px;
  }
  @media ${baseTheme.media.medium} {
    max-width: 768px;
    padding: 0 40px;
  }
  @media ${baseTheme.media.small} {
    max-width: 410px;
    padding: 0 20px;
  }
`;

// header

export const HeaderWrapper = styled.header<HeaderProps>`
  transform: ${({ visible }) =>
    visible === "true" ? "translateY(0)" : "translateY(-100%)"};
  position: sticky;
  z-index: 10;
  top: 0;
  left: 0;
  background-color: #fff;
  transition: transform 0.5s ease-in-out;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 25px 0;
  position: relative;
  @media ${baseTheme.media.small} {
    justify-content: space-between;
  }
`;

export const Button = styled.button`
  border: none;
  background: none;
  display: none;
  @media ${baseTheme.media.medium} {
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }
`;

export const LogoImage = styled.img`
  display: block;
  max-width: 100%;
  height: 24px;
  object-fit: contain;
  margin: 0 auto;
`;

export const Navigation = styled.nav`
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  @media ${baseTheme.media.medium} {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    border: none;
  }
  > ul {
    display: flex;
    justify-content: center;
    @media ${baseTheme.media.medium} {
      display: none;
    }
    > li {
      margin-right: 2.25rem;
      cursor: pointer;
      position: relative;
      @media ${baseTheme.media.large} {
        margin-right: 2rem;
      }
      @media ${baseTheme.media.medium} {
        margin-right: 1rem;
      }
      &:hover > ul {
        display: initial;
      }
      > a {
        display: block;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 16px;
        color: #000000;
        padding: 21.5px 5px 20px 5px;
      }
      > ul {
        position: absolute;
        left: 0;
        width: 176px;
        background-color: #fff;
        border: 1px solid #e9e9e9;
        padding: 20px 21px 20px 20px;
        display: none;
        > li {
          width: 100%;
          border-bottom: 1px solid #e9e9e9;
          padding: 8px 0;
          position: relative;
          &::after {
            content: "";
            background: url(${arrowSmall}) no-repeat;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 0;
            width: 5px;
            height: 8px;
          }
          > a {
            display: block;
            font-style: normal;
            font-weight: 400;
            font-size: 0.93rem;
            line-height: 13px;
            color: #000000;
            transition: transform 0.3s ease-in-out;
            &:hover {
              color: #969696;
              transform: translateX(8px);
            }
          }
        }
      }
      &:not(:last-child) {
        padding-right: 15px;
      }
      &:not(:last-child)::after {
        content: "";
        background: url(${svgIcon}) no-repeat;
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        right: 0;
        width: 10px;
        height: 6px;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  /* @media ${baseTheme.media.medium} {
    display: none;
  } */
`;

// burger menu

export const Overlay = styled.div`
  display: none;
  @media ${baseTheme.media.medium} {
    display: block;
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.7);
  }
`;

export const Menu = styled.div<BurgerMenuProps>`
  display: none;
  @media ${baseTheme.media.medium} {
    display: block;
    transition: 0.8s;
    transform: ${({ isopen }) =>
      isopen === "true" ? "translateX(0)" : "translateX(-130%)"};
    position: fixed;
    z-index: 150;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }
`;

export const MenuContent = styled.div`
  width: 85%;
  height: 100%;
  background-color: #fff;
  border-right: 1px solid #e9e9e9;
  transition: all 1s;
  > ul {
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    height: 80%;
    overflow-y: scroll;
    background-color: #fff;
    &::-webkit-scrollbar {
      display: none;
    }
    > li {
      padding: 16px 0;
      border-bottom: 1px solid #e9e9e9;
      position: relative;
      > a {
        display: inline-block;
        font-style: normal;
        font-weight: 700;
        font-size: 1.14rem;
        line-height: 16px;
        color: #000000;
        position: relative;
      }
      > ul {
        display: none;
        transform: translateY(-100%);
        > li {
          border-bottom: 1px solid #e9e9e9;
          padding: 20px 0;
          > a {
            display: inline-block;
            font-style: normal;
            font-weight: 400;
            font-size: 0.93rem;
            line-height: 13px;
            color: #000000;
            transition: transform 0.3s ease-in-out;
            position: relative;
            padding-right: 10px;
            &::after {
              content: "";
              background: url(${arrowSmall}) no-repeat;
              position: absolute;
              transform: translateY(-50%);
              top: 50%;
              right: 0;
              width: 5px;
              height: 8px;
            }
            &:hover {
              color: #969696;
              transform: translateX(8px);
            }
          }
          &:last-child {
            border: none;
            padding: 20px 0 0;
          }
        }
      }
      > .active {
        display: block;
        transition: all 0.8s;
        transform: translateY(0);
      }

      &:not(:last-child) > a {
        padding-right: 15px;
        &::after {
          content: "";
          background: url(${svgIcon}) no-repeat;
          position: absolute;
          transform: translateY(-50%);
          top: 50%;
          right: 0;
          width: 10px;
          height: 6px;
        }
      }
      &:not(:last-child) > .opened {
        &::after {
          transform: translateY(-45%) rotate(180deg);
        }
      }
    }
  }
`;

export const Upper = styled.div`
  border-bottom: 1px solid #e9e9e9;
  padding: 32px 20px 25px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > button {
    border: none;
    background: none;
  }
  > img {
    height: 24px;
    object-fit: contain;
  }
`;

// search

export const SearchWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  @media ${baseTheme.media.medium} {
    display: none;
  }
`;

export const SearchNavigationWrapper = styled.div`
  @media ${baseTheme.media.extraLarge} {
    display: none;
  }
  @media ${baseTheme.media.medium} {
    display: block;
  }
`;

export const SearchContent = styled.div`
  border: 1px solid #929292;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 5px;
  max-width: 225px;
  @media ${baseTheme.media.medium} {
    left: 0;
  }
  > img {
    width: auto;
    height: auto;
    object-fit: contain;
    margin: 0 5px;
  }
  > input {
    padding: 5px;
  }
`;

// main

export const Content = styled.main`
  flex-grow: 1;
  position: relative;
  > p {
    font-style: normal;
    font-weight: 700;
    font-size: 1.7rem;
    line-height: 30px;
    color: #000000;
    width: 60%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ContentWrapper = styled.ul`
  margin: 3rem 0 6rem;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  height: 100%;

  @media ${baseTheme.media.medium} {
    justify-content: space-between;
  }
  @media ${baseTheme.media.small} {
    display: block;
  }
`;

// post

export const PostItem = styled.li`
  width: calc((100% / 3) - (6rem / 3));
  margin-right: 3rem;
  margin-bottom: 4rem;
  height: 459px;
  list-style: none;
  &:nth-child(3n) {
    margin-right: 0;
  }
  @media ${baseTheme.media.medium} {
    width: calc((100% / 2) - (2rem / 2));
    margin-right: 0rem;
    &:nth-child(3n) {
      margin-right: 0rem;
    }
  }
  @media ${baseTheme.media.small} {
    width: 100%;
    margin-bottom: 3rem;
  }
`;

export const PostPicture = styled.div`
  width: 100%;
  height: 230px;
  position: relative;
  margin-bottom: 16px;
  transition: all 0.3s;
  &:hover {
    opacity: 0.7;
    transform: scale(1.0001);
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const PostTags = styled.p`
  display: inline-block;
  font-style: normal;
  font-weight: 700;
  font-size: 0.93rem;
  line-height: 13px;
  color: #eb0028;
  margin-bottom: 16px;
`;

export const PostTitle = styled.h2`
  width: 90%;
  max-height: 60px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Number of lines to display */
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-style: normal;
  font-weight: 700;
  font-size: 1.7rem;
  line-height: 30px;
  color: #000000;
  margin-bottom: 16px;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    color: #929292;
  }
`;

export const PostAuthor = styled.p`
  display: inline-block;
  font-style: normal;
  font-weight: 700;
  font-size: 0.86rem;
  line-height: 12px;
  color: #000000;
  margin-bottom: 16px;
  /* margin-right: 5px; */
`;

export const PostDate = styled.p`
  display: inline-block;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
  color: #9b9b9b;
  > span {
    position: relative;
    padding: 0 8px;
    margin: 0 5px;
    &::before {
      content: "";
      background: url(${oval}) no-repeat;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-60%);
      width: 3px;
      height: 3.5px;
    }
    &::after {
      content: "";
      background: url(${oval}) no-repeat;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-60%);
      width: 3px;
      height: 3.5px;
    }
  }
`;

export const PostText = styled.p`
  width: 100%;
  height: 80px;
  text-overflow: ellipsis;
  overflow-y: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* Number of lines to display */
  -webkit-box-orient: vertical;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 20px;
  color: #929292;
`;

// modal

export const ModalWrapper = styled.div`
  position: fixed;
  z-index: 150;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const ModalContent = styled.div`
  padding: 4rem;
  position: absolute;
  z-index: 200;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 1px solid #e9e9e9;
  width: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${baseTheme.media.small} {
    padding: 4rem 2rem;
  }
  > button {
    background: none;
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
  }
  .text {
    width: 60%;
    margin: 0 auto;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 20px;
    color: #929292;
    @media ${baseTheme.media.large} {
      width: 80%;
    }
    @media ${baseTheme.media.medium} {
      width: 100%;
    }
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 4rem;
  @media ${baseTheme.media.small} {
    margin-bottom: 2rem;
  }
  .img {
    margin-bottom: 16px;
    width: 360px;
    height: 230px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media ${baseTheme.media.small} {
      width: 100%;
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .tags {
    display: inline-block;
    font-style: normal;
    font-weight: 700;
    font-size: 0.93rem;
    line-height: 13px;
    color: #eb0028;
    margin-bottom: 16px;
  }
  .title {
    font-style: normal;
    font-weight: 700;
    font-size: 1.7rem;
    line-height: 30px;
    color: #000000;
    margin-bottom: 16px;
    @media ${baseTheme.media.small} {
      text-align: center;
    }
  }
  .author {
    display: inline-block;
    font-style: normal;
    font-weight: 700;
    font-size: 0.86rem;
    line-height: 12px;
    color: #000000;
    margin-bottom: 16px;
  }
  .date {
    display: inline-block;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    color: #9b9b9b;
    margin-bottom: 16px;
    > span {
      position: relative;
      padding: 0 8px;
      margin: 0 5px;
      &::before {
        content: "";
        background: url(${oval}) no-repeat;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-60%);
        width: 3px;
        height: 3.5px;
      }
      &::after {
        content: "";
        background: url(${oval}) no-repeat;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-60%);
        width: 3px;
        height: 3.5px;
      }
    }
  }
`;
