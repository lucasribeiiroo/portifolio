import { Link } from "react-router";
import { Logo, NavBar, MenuItems, MenuItem } from "./styles";

const Navbar = () => {
  return (
    <NavBar>
      <Link to="/">
        <Logo id="nav-items" />
      </Link>
      <MenuItems id="nav-items">
        <MenuItem to="/about">About</MenuItem>
        <MenuItem to="/skills">Skills</MenuItem>
        <MenuItem to="/projects">Projects</MenuItem>
        <MenuItem to="/contact" hire>
          Hire me
        </MenuItem>
      </MenuItems>
    </NavBar>
  );
};

export default Navbar;
