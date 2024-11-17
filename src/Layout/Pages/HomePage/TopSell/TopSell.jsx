import "./TopSell.css";
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../../Hooks/axiosPublic/axiosPublic";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import AllProductCards from "../../../Components/AllProductCards/AllProductCards";

// Swiper js__
import "swiper/css";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const TopSell = () => {
  const axiosPublic = UseAxiosPublic();
  const [screenWidth, setScreenWidth] = useState(null);

  const { data: topSells = [], isLoading } = useQuery({
    queryKey: ["topSell"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/topSell");
      return data;
    },
  });

  // Getting current screen width__

  useEffect(() => {
    const handleScreenWidth = () => {
      setScreenWidth(window.innerWidth)
    }
    
    if(window !== "undefined") {
      handleScreenWidth();

      window.addEventListener("resize", handleScreenWidth);
      return () => window.removeEventListener("resize", handleScreenWidth);
    }
  }, [])

  return (
    <>
      <div className="main_container">
        <div className="main_top_sell_outer_container">
          <div className="top_sell_title_container">
            <h2>TOP SELL</h2>
          </div>

          <div className="main_top_sell_cart_outer_container">
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
                {topSells.map((topSell) => (
                  <SwiperSlide key={topSell._id}>
                    <AllProductCards cartItem={topSell}></AllProductCards>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>

          <div className="top_sell_button_container">
            <button>View All</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSell;