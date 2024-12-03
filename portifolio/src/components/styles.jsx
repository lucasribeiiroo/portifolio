import styled from "styled-components";
import LogoUrl from "../assets/logo.png";

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #030712;
`;

export const MenuItems = styled.ul`
  display: flex;

  justify-content: center !important;
  align-items: center;
`;

export const MenuItem = styled.li`
  justify-self: auto;
  margin: 20px;
  padding: 10px 20px;
  font-size: 24px;
  color: white;
  cursor: pointer;
  font-family: Space Grotesk;
  &:hover {
    color: #32b9e7;
    transition: ease-in 0.2s;
    filter: brightness();
  }
`;

export const Logo = styled.img.attrs({
  src: LogoUrl,
  width: 80,
  height: 10,
  alt: "LR - Logo",
})`
  margin: 10px;
`;
