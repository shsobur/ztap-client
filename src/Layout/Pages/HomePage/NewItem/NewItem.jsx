import "./NewItem.css";
import { Navigation } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import UseAxiosPublic from "../../../Hooks/axiosPublic/axiosPublic";
// Swiper style__
import "swiper/css";
import "swiper/css/navigation";
import NewItemCart from "../../../Components/NewItemCart/NewItemCart";

const NewItem = () => {
  const axiosPublic = UseAxiosPublic();

  const { data: newItems = [], isLoading } = useQuery({
    queryKey: ["newItem"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("newItem");
      return data;
    },
  });

  console.log(newItems);

  return (
    <>
      <div className="main_container">
        <div className="main_new_item_outer_container">
          <div className="new_item_title_container">
            <h2>NEW ARRIVALS</h2>
          </div>

          <div className="main_new_item_cart_outer_container">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {newItems.map((newItem) => (
                <SwiperSlide key={newItem._id}>
                  <NewItemCart newItem={newItem}></NewItemCart>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewItem;