import "./NewItem.css";
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../../Hooks/axiosPublic/axiosPublic";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import AllProductCards from "../../../Components/AllProductCards/AllProductCards";
// Swiper js__
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const NewItem = () => {
  const axiosPublic = UseAxiosPublic();

  const { data: newItems = [], isLoading } = useQuery({
    queryKey: ["newItem"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/newItem");
      return data;
    },
  });

  return (
    <>
      <div className="main_container">
        <div className="main_new_item_outer_container">
          <div className="new_item_title_container">
            <h2>NEW ARRIVALS</h2>
          </div>

          <div className="main_new_item_cart_outer_container">
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
                {newItems.map((newItem) => (
                  <SwiperSlide key={newItem._id}>
                    <AllProductCards cartItem={newItem}></AllProductCards>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>

          <div className="new_item_button_container">
            <button>View All</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewItem;