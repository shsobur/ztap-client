import "./Footer.css";
import logo from "../../../assets/logoFooter.png";
import card from "../../../assets/footerCards.png";
import { PiGithubLogoDuotone } from "react-icons/pi";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div>
        <div className="main_footer_outer_container">
          <div className="footer_upper_section_container">
            <div className="first_column_container">
              <div className="footer_image_container">
                <img src={logo} alt="logo" />
              </div>
              <p>
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className="footer_social_icons">
                <h3>
                  <CiFacebook />
                </h3>
                <h3>
                  <CiInstagram />
                </h3>
                <h3>
                  <PiGithubLogoDuotone />
                </h3>
                <h3>
                  <CiTwitter />
                </h3>
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
            <h2>Ztap © 2001-{currentYear}, All Rights Reserved</h2>
            <div className="footer_card_image_container">
              <img src={card} alt="image" />
            </div>
          </div>

          <div className="main_news_letter_section_container">
            <div className="news_letter_inner_container">
              <div>
                <h2>
                  STAY UPTO DATE ABOUT
                  <br /> OUR LATEST OFFERS
                </h2>
              </div>
              <div className="news_letter_input_section_container">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;