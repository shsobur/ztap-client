import Baner from "../Baner/Baner";
import NewItem from "../NewItem/NewItem";
import Slider from "../Slider/Slider";

const HomePageLayout = () => {
  return (
    <>
      <div className="main_container">
        <Baner></Baner>
        <Slider></Slider>
        <NewItem></NewItem>
      </div>
    </>
  );
};

export default HomePageLayout;
