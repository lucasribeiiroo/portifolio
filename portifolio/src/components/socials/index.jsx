import {
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import BtnCv from "../btnCv";
import { Link } from "react-router";

const iconStyle = { margin: "10px", color: "white" };

const Socials = (props) => {
  const { cv, iconsSize } = props;
  return (
    <div className="flex mt-10 place-items-center space-x-7">
      {cv && <BtnCv />}
      <Link
        to="https://www.linkedin.com/in/lucas-ribeiro-232983118/"
        target="blank"
      >
        <FaLinkedinIn size={iconsSize || 22} style={iconStyle} />
      </Link>
      <Link to="https://github.com/lucasribeiiroo" target="blank">
        <FaGithub size={iconsSize || 22} style={iconStyle} />
      </Link>
      <Link to="https://www.instagram.com/lvribeiro_/" target="blank">
        <FaInstagram size={iconsSize || 22} style={iconStyle} />
      </Link>
      <Link to="https://wa.me/5551984411995" target="blank">
        <FaWhatsapp size={iconsSize || 22} style={iconStyle} />
      </Link>
    </div>
  );
};

export default Socials;
