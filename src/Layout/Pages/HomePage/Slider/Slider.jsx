import "./Slider.css";
import Marquee from "react-fast-marquee";
// Slider image__
import img1 from "../../../../assets/slider1.png";
import img2 from "../../../../assets/slider2.png";
import img3 from "../../../../assets/slider3.png";
import img4 from "../../../../assets/slider4.png";
import img5 from "../../../../assets/slider5.png";
import img6 from "../../../../assets/slider6.png";
import img7 from "../../../../assets/slider7.png";

const Slider = () => {
  return (
    <>
      <div className="main_container">
        <div className="main_slider_container">
          <Marquee
            speed={100}
            autoFill={true}
            gradient={true}
            pauseOnClick={true}
          >
            <div className="marquee_img_container">
              <img src={img1} alt="image" />
            </div>
            <div className="marquee_img_container">
              <img src={img2} alt="image" />
            </div>
            <div className="marquee_img_container">
              <img src={img3} alt="image" />
            </div>
            <div className="marquee_img_container">
              <img src={img4} alt="image" />
            </div>
            <div className="marquee_img_container">
              <img src={img5} alt="image" />
            </div>
            <div className="marquee_img_container">
              <img src={img6} alt="image" />
            </div>
            <div className="marquee_img_container">
              <img src={img7} alt="image" />
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Slider;