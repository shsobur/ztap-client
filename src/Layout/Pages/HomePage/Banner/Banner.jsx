// File path__
import "./Banner.css";
import bannerVideo from "../../../../assets/banner-video.mp4";

// React icons__
import { FiPlayCircle } from "react-icons/fi";
import { LuPauseCircle } from "react-icons/lu";

// From react__
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  const videoRef = useRef(null);
  const [isPlay, setIsPlay] = useState(false);
  const [playIcon, setPlayIcon] = useState(false);
  const [isVideoEnd, setIsVideoEnd] = useState(false);

  // Video play__
  const handleVideoPlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlay(true);
      setIsVideoEnd(false);
    } else {
      videoRef.current.pause();
      setIsPlay(false);
      setIsVideoEnd(true);
    }

    setIsPlay(!isPlay);
    setPlayIcon(!playIcon);
  };

  const handleVideoEnd = () => {
    setIsPlay(true);
    setIsVideoEnd(true);
    setPlayIcon(!playIcon);
  };

  return (
    <>
      <div className="main_banner_outer_container">
        <div className="main_banner_video_container">
          <video
            src={bannerVideo}
            ref={videoRef}
            onEnded={handleVideoEnd}
            autoPlay
            muted
          />
        </div>

        <div className="main_banner_overlay_container">
          <div className="banner_text_container">
            {isVideoEnd && (
              <div className="overlay_inner_container">
                <h2>FIND SHOES THAT MATCHES YOUR STYLE</h2>
                <p>
                  Browse through our diverse range of meticulously crafted
                  garments, designed to bring out your individuality and cater
                  to your sense of style.
                </p>
                <Link to="/shop">
                  <button className="button-85" role="button">
                    Shop Now
                  </button>
                </Link>
              </div>
            )}
          </div>

          <div className="banner_video_play_container">
            <h3 onClick={handleVideoPlay}>
              {playIcon ? <FiPlayCircle /> : <LuPauseCircle />}
            </h3>
            <p>{isPlay ? "Play" : "Pause"}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;