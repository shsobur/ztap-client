import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { LuUserCircle } from "react-icons/lu";
import { BsCartPlusFill } from "react-icons/bs";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="main_navbar_outer_container">
        <div className="main_navbar_inner_container">
          <div className="navbar_image_outer_container">
            <img src={logo} alt="logo" />
          </div>

          <div className="main_navbar_navigation_container">
            <div className="main_navbar_navigate_route_container">
              <ul>
                <li>
                  <NavLink>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    Shop
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    Contact us
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    Dashboard
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="main_navbar_user_info_container">
              <div className="navbar_cart_info_container">
                <h3><BsCartPlusFill /></h3>
                <span>99</span>
              </div>
              <h3><LuUserCircle /></h3>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar;
