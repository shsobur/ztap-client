import "./SignUp.css";
import logo from "../../../../assets/logoFooter.png";
// Swiper js__
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";

const SignUp = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

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
                className="mySwiper"
              >
                <form>
                  <div>
                    <SwiperSlide>
                      <div className="form_name_container">
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
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                  </div>
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
