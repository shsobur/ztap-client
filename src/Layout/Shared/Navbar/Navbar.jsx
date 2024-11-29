import "./Navbar.css";
import { useContext, useState } from "react";
import { FcMenu } from "react-icons/fc";
import { RxCross1 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { LuUserCircle } from "react-icons/lu";
import { BsCartPlusFill } from "react-icons/bs";
import { AuthContext } from "../../Components/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  // Sign Out__
  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You went to sign out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f70000",
      cancelButtonColor: "#007c01",
      confirmButtonText: "Yes, Sign out",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut().then(() => {
          Swal.fire({
            title: "Finished!",
            text: "Sign out successfuly",
            icon: "success",
          });
        });
      }
    });
  };

  return (
    <>
      <div className="main_navbar_outer_container">
        <div className="main_navbar_inner_container">
          <div className="navbar_image_outer_container">
            <img src={logo} alt="logo" />
          </div>

          <div className="main_navbar_navigation_container">
            <div
              id="main_navbar_navigate_route_container"
              className={
                isOpen
                  ? "#main_navbar_navigate_route_container isActive"
                  : "#main_navbar_navigate_route_container"
              }
            >
              <ul onClick={handleIsOpen}>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink>Shop</NavLink>
                </li>
                <li>
                  <NavLink>Contact us</NavLink>
                </li>
                <li>
                  <NavLink>Dashboard</NavLink>
                </li>
              </ul>
            </div>

            <div className="main_navbar_user_info_container">
              <div className="navbar_cart_info_container">
                <h3>
                  <BsCartPlusFill />
                </h3>
                <span>99</span>
              </div>
              <h3>
                <LuUserCircle />
              </h3>

              <p>
                {user ? (
                  <button onClick={handleSignOut}>SIGN OUT</button>
                ) : (
                  <Link to="/signIn">SIGN IN</Link>
                )}
              </p>
            </div>

            <div onClick={handleIsOpen} className="navbar_menu_container">
              {isOpen ? (
                <h3>
                  <FcMenu />
                </h3>
              ) : (
                <h3>
                  <RxCross1 />
                </h3>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
