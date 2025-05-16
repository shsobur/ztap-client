import Baner from "../Baner/Baner";
import Style from "../Style/Style";
import Review from "../Review/Review";
import Slider from "../Slider/Slider";
import NewItem from "../NewItem/NewItem";
import TopSell from "../TopSell/TopSell";

const HomePageLayout = () => {
  return (
    <>
      <div>
        <Baner></Baner>
        <Slider></Slider>
        <NewItem></NewItem>
        <TopSell></TopSell>
        <Style></Style>
        <Review></Review>
      </div>
    </>
  );
};

export default HomePageLayout;