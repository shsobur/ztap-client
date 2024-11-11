import "./TopSell.css";
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../../Hooks/axiosPublic/axiosPublic";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import AllProductCards from "../../../Components/AllProductCards/AllProductCards";

// Swiper js__
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TopSell = () => {
  const axiosPublic = UseAxiosPublic();

  const {data: topSells = [], isLoading} = useQuery({
    queryKey: ["topSell"],
    queryFn: async () => {
      const {data} = await axiosPublic.get("/topSell");
      return data;
    }
  })

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
                slidesPerView={3}
                spaceBetween={10}
                navigation={true}
                modules={[Navigation]}
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
