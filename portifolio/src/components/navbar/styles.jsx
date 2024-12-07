import styled from "styled-components";
import LogoUrl from "../../assets/logo.png";
import { Link } from "react-router";

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

export const MenuItem = styled(Link)`
  justify-self: auto;
  margin: 20px;
  padding: 10px 20px !important;
  font-size: 24px;
  color: #d1d5db;
  cursor: pointer;
  border-radius: 8px;
  font-family: Space Grotesk;
  &:hover {
    color: #32b9e7;
    transition: ease-in 0.2s;
    filter: brightness();
    transition: ease-in-out 0.2;
  }

  ${({ hire }) =>
    hire &&
    `
  background-color: #32b9e7;
  border-radius: 20px;
  color: white;
  font-size: 20px;
  margin: 10px;

  &:hover {
    background: #121431;
    color: white;
    transition: ease-in 0.2s;
    filter: brightness();
    transition: ease-in-out 0.2;
  }
  `}
`;

export const Logo = styled.img.attrs({
  src: LogoUrl,
  width: 80,
  height: 10,
  alt: "LR - Logo",
})`
  margin: 10px;
`;
