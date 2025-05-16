// File path__
import "./Review.css";
import UseAxiosPublic from "../../../Hooks/axiosPublic/axiosPublic";

// Imported package__
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import "@smastrom/react-rating/style.css";
import { SiTicktick } from "react-icons/si";
import { Rating } from "@smastrom/react-rating";
import { Swiper, SwiperSlide } from "swiper/react";

// Form react__
import { useEffect, useState } from "react";

const Review = () => {
  const axiosPublic = UseAxiosPublic();
  const [reviews, setReviews] = useState([]);
  const [reviewLimit, setReviewLimit] = useState(6);
  const [screenSize, setScreenSize] = useState(null);

  // Get limited data__
  useEffect(() => {
    axiosPublic
      .get(`/fewReviews?limit=${reviewLimit}`)
      .then((res) => {
        setReviews(res.data);
      })
      .catch((error) => {
        console.log("Error fetching reviews:", error);
      });
  }, [axiosPublic, reviewLimit]);

  const handleReviewLimit = () => {
    const limit = reviewLimit + 6;
    setReviewLimit(limit);
  };

  // Gat current width__
  useEffect(() => {
    const handleWindowSize = () => {
      setScreenSize(window.innerWidth);
    };

    if (window.innerWidth !== "undefined") {
      handleWindowSize();

      window.addEventListener("resize", handleWindowSize);
      return () => window.removeEventListener("resize", handleWindowSize);
    }
  }, []);

  return (
    <>
      <div className="main_container">
        <div className="main_review_outer_container">
          <div className="review_title_container">
            <h2>OUR HAPPY CUSTOMERS</h2>
          </div>

          <div className="main_review_slider_container">
            <Swiper
              slidesPerView={
                screenSize > 768 ? 3.2 : screenSize > 475 ? 2.1 : 1.2
              }
              spaceBetween={screenSize <= 768 ? 10 : 20}
              freeMode={true}
              modules={[FreeMode]}
              className="mySwiper"
            >
              {reviews.map((review) => (
                <SwiperSlide key={review._id}>
                  <div className="main_review_cart_container">
                    <div className="review_rating_container">
                      <Rating
                        style={
                          screenSize <= 768
                            ? { maxWidth: 100 }
                            : { maxWidth: 130 }
                        }
                        value={review.rating}
                        readOnly
                      />
                    </div>

                    <div className="review_info_container">
                      <div className="review_user_name_container">
                        <h2>{review.userName}</h2>
                        <h3>
                          <SiTicktick />
                        </h3>
                      </div>
                      <p>{review.message}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <SwiperSlide>
                <div className="review_lode_btn_container">
                  <button onClick={handleReviewLimit}>More</button>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;