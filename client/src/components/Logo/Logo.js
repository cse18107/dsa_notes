import code from "../../images/code.png";
import "./Logo.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link className="logo" to="/">
        <img src={code} alt="code" className="logo-image" />
        <h1 className="logo-text">DSA NOTES</h1>
      </Link>
    </div>
  );
};

export default Logo;
