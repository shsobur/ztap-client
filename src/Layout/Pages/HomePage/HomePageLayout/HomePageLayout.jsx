import Baner from "../Baner/Baner";
import NewItem from "../NewItem/NewItem";
import Slider from "../Slider/Slider";
import TopSell from "../TopSell/TopSell";

const HomePageLayout = () => {
  return (
    <>
      <div className="main_container">
        <Baner></Baner>
        <Slider></Slider>
        <NewItem></NewItem>
        <TopSell></TopSell>
      </div>
    </>
  );
};

export default HomePageLayout;
