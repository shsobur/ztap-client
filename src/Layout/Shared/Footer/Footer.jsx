import "./Footer.css";
import logo from "../../../assets/logoFooter.png";
import card from "../../../assets/footerCards.png";
import { PiGithubLogoDuotone } from "react-icons/pi";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <div className="main_container">
        <div className="main_footer_outer_container">

          <div className="footer_upper_section_container">

            <div className="first_column_container">
              <div className="footer_image_container">
                <img src={logo} alt="logo" />
              </div>
              <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
              <div className="footer_social_icons">
                <h3><CiFacebook /></h3>
                <h3><CiInstagram /></h3>
                <h3><PiGithubLogoDuotone /></h3>
                <h3><CiTwitter /></h3>
              </div>
            </div>

            <div className="second_patent_column_container">
              
              <div className="second_chield_section_container">
                <h3>Company</h3>
                <p>About</p>
                <p>Features</p>
                <p>Works</p>
                <p>Career</p>
              </div>

              <div className="second_chield_section_container">
                <h3>Help</h3>
                <p>Customer Support</p>
                <p>Delivery Details</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
              </div>

              <div className="second_chield_section_container">
                <h3>FAQ</h3>
                <p>Account</p>
                <p>Manage Deliveries</p>
                <p>Orders</p>
                <p>Payments</p>
              </div>

              <div className="second_chield_section_container">
                <h3>Resources</h3>
                <p>Free eBooks</p>
                <p>Development Tutorial</p>
                <p>How to - Blog</p>
                <p>Youtube Playlist</p>
              </div>

            </div>

          </div>

          <div className="footer_down_section_container">
              <h2>Shop.co © 2000-2023, All Rights Reserved</h2>
              <div className="footer_card_image_container">
                <img src={card} alt="image" />
              </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Footer;
