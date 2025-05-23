// File path__
import "./NewItem.css";
import UseAxiosPublic from "../../../Hooks/axiosPublic/axiosPublic";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import AllProductCards from "../../../Components/AllProductCards/AllProductCards";

// Imported package__
import "swiper/css";
import "swiper/css/navigation";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";

// Form react__
import { useEffect, useState } from "react";

const NewItem = () => {
  const axiosPublic = UseAxiosPublic();
  const [screenWidth, setScreenWidth] = useState(null);

  // Gat new products__
  const { data: newItems = [], isLoading } = useQuery({
    queryKey: ["newItem"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/newItem");
      return data;
    },
  });

  // Gat current screen width__
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
                slidesPerView={
                  screenWidth > 768 ? 3.3 : screenWidth > 475 ? 2.2 : 1.2
                }
                spaceBetween={10}
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