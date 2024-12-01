import { head_LOGO } from "../util/logo";
import { Link } from "react-router-dom";


const Header = () => {
    return (
      <div className="head">
        <div className="head-logo">
          <img
            className="logo"
            src={head_LOGO}
          />
        </div>
  
        <div className="head-items">
          <ul>
            <Link to ="/body"><li>Home</li></Link>  {/** link is used so that when we click the whole page doesn't refresh just the page comes.  */} 
            <Link to="/about"><li>AboutUS</li></Link>
            <Link to="/contact"><li>ContactUs</li></Link>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;