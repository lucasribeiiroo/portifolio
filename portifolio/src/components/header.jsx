import { Logo, NavBar, MenuItems, MenuItem } from "./styles";

const Header = () => {
  return (
    <NavBar>
      <Logo />
      <MenuItems>
        <MenuItem>About</MenuItem>
        <MenuItem>Skills</MenuItem>
        <MenuItem>Projects</MenuItem>
        <MenuItem>Contact</MenuItem>
      </MenuItems>
    </NavBar>
  );
};

export default Header;
