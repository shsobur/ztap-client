// File path__
import Banner from "../Banner/Banner";
import Style from "../Style/Style";
import Review from "../Review/Review";
import Slider from "../Slider/Slider";
import NewItem from "../NewItem/NewItem";
import TopSell from "../TopSell/TopSell";

const HomePageLayout = () => {
  return (
    <>
      <div>
        <Banner></Banner>
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