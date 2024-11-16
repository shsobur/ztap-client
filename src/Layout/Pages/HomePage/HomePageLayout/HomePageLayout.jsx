import Baner from "../Baner/Baner";
import NewItem from "../NewItem/NewItem";
import Review from "../Review/Review";
import Slider from "../Slider/Slider";
import TopSell from "../TopSell/TopSell";

const HomePageLayout = () => {
  return (
    <>
      <div>
        <Baner></Baner>
        <Slider></Slider>
        <NewItem></NewItem>
        <TopSell></TopSell>
        <Review></Review>
      </div>
    </>
  );
};

export default HomePageLayout;
