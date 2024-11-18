import "./SignUp.css";
import logo from "../../../../assets/logoFooter.png";
// Swiper js__
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef, useState } from "react";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { PiSmileyXEyesDuotone } from "react-icons/pi";
import UseAxiosPublic from "../../../Hooks/axiosPublic/axiosPublic";
// Image_hosting_key__
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const SignUp = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [firstPassIcon, setFirstPassIcon] = useState(false);
  const [secondPassIcon, setSecondPassIcon] = useState(false);
  const [image, setImage] = useState(null);
  const axiosPublic = UseAxiosPublic();

  const hadleFristPassIcon = () => {
    setFirstPassIcon(!firstPassIcon);
  };

  const hadlesSecondPassIcon = () => {
    setSecondPassIcon(!secondPassIcon);
  };

  // Hosting image__

  const handleImageHosting = async (e) => {
    const imageFile = {image: e.target.files[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type" : "multipart/form-data"
      }
    })
    setImage(res.data.data.display_url)
  }
  

  return (
    <>
      <div className="main_signUp_container">
        <div className="main_signUp_outer_container">
          <div className="main_signUp_inner_container">
            <div className="left_signUp_main_container">
              <div className="signUp_image_container">
                <img src={logo} alt="logo" />
              </div>

              <h2>Create Your New Account</h2>
              <p>
                Thank you for joining us. As a member! you will enjoy exclusive
                deals, personalized recommendations, and special discounts.
                Explore our diverse collection of sneakers, formals etc. to find
                your perfect pair Step ahead with Ztep!
              </p>
            </div>

            <div className="right_signUp_main_container">
              <Swiper
                onSwiper={(Swiper) => {
                  Swiper.params.navigation.prevEl = prevRef.current;
                  Swiper.params.navigation.nextEl = nextRef.current;
                  Swiper.navigation.init();
                  Swiper.navigation.update();
                }}
                navigation={{
                  nextEl: ".custom_next",
                  prevEl: ".custom_prev",
                }}
                pagination={{ type: "progressbar" }}
                modules={[Pagination, Navigation]}
                allowTouchMove={false}
                className="mySwiper"
              >
                <form>
                  <SwiperSlide>
                    <div className="form_name_container">
                      <h2>Enter Your Full Name_</h2>

                      <div className="form_name_inner_container">
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First name"
                        />
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last name (optional)"
                        />
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="form_barth_container">
                      <h2>Enter Your Barth Information_</h2>

                      <div className="form_container">
                        <div className="dropdown_group">
                          <input
                            className="dropdown"
                            type="text"
                            name="month"
                            placeholder="Month"
                          />

                          <input
                            className="dropdown"
                            type="text"
                            name="day"
                            placeholder="Day"
                          />

                          <input
                            className="dropdown"
                            type="text"
                            name="year"
                            placeholder="Year"
                          />
                        </div>

                        <div className="gender_group">
                          <label htmlFor="gender" className="label"></label>

                          <select id="gender" className="dropdown">
                            <option disabled>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                          </select>
                        </div>

                        <a
                          target="main"
                          href="https://support.google.com/accounts/answer/1733224?hl=en"
                          className="info_link"
                        >
                          Why we ask for birthday and gender?
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="form_email_container">
                      <h2>Enter Your Email Address__</h2>

                      <div>
                        <input
                          type="email"
                          name="email"
                          placeholder="ztap@example.com"
                        />
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="form_password_container">
                      <h2>Enter Your Password__</h2>

                      <div>
                        <div className="password_input_container">
                          <input
                            type={firstPassIcon ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                          />
                          <h3
                            onClick={hadleFristPassIcon}
                            id="password_show_icon"
                          >
                            {firstPassIcon ? (
                              <BsEmojiHeartEyes />
                            ) : (
                              <PiSmileyXEyesDuotone />
                            )}
                          </h3>
                        </div>

                        <br />

                        <div className="password_input_container">
                          <input
                            type={secondPassIcon ? "text" : "password"}
                            name="password"
                            placeholder="Confirm password"
                          />
                          <h3
                            onClick={hadlesSecondPassIcon}
                            id="password_show_icon"
                          >
                            {secondPassIcon ? (
                              <BsEmojiHeartEyes />
                            ) : (
                              <PiSmileyXEyesDuotone />
                            )}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="form_image_container">
                      <h2>Almost Finished!</h2>
                      <h3>
                        Choose Your Picture__<span>(optional)</span>
                      </h3>

                      <div className="form_image_outer_container">
                        <div className="from_image_inner_container">
                          <img
                            src={image}
                            alt="image"
                          />
                        </div>

                        <div className="from_fileUp_container">
                          <input
                            type="file"
                            name="image"
                            onChange={handleImageHosting}
                          />
                          {/* <button onClick={handleImageUpload}>Upload</button> */}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </form>
              </Swiper>

              <div>
                <button ref={prevRef} className="button_1">
                  Previse
                </button>

                <button ref={nextRef} className="button_2">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
