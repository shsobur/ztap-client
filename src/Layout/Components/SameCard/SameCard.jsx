import "./SameCard.css";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import AllProductCards from "../AllProductCards/AllProductCards";
// Swiper js__
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

const SameCard = ({ sameProducts, isLoading }) => {
  const [screenWidth, setScreenWidth] = useState(null);

  // Geting current screen width__
  useEffect(() => {
    const handleScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    if (window !== "undefined") {
      handleScreenWidth();

      window.addEventListener("resize", handleScreenWidth);
      return () => window.removeEventListener("resize", handleScreenWidth);
    }
  }, []);

  return (
    <>
      <div className="same_card_main_container">
        <h2 className="same_card_section_title">You might also like</h2>

        <div className="same_card_inner_container">
          {isLoading ? (
            <LoadingSpinner></LoadingSpinner>
          ) : (
            <Swiper
              slidesPerView={
                screenWidth > 768 ? 3.3 : screenWidth > 475 ? 2.2 : 1.2
              }
              spaceBetween={10}
              className="mySwiper"
            >
              {sameProducts.map((sameProduct) => (
                <SwiperSlide key={sameProduct._id}>
                  <AllProductCards cartItem={sameProduct}></AllProductCards>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </>
  );
};

SameCard.propTypes = {
  sameProducts: PropTypes.array,
  isLoading: PropTypes.node,
};

export default SameCard;
