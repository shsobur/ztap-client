import "./Baner.css";
import { useRef, useState } from "react";
import { FiPlayCircle } from "react-icons/fi";
import { LuPauseCircle } from "react-icons/lu";
import banerVideo from "../../../../assets/baner-video.mp4";

const Baner = () => {
  const videoRef = useRef(null);
  const [isPlay, setIsPlay] = useState(false);
  const [playIcon, setPlayIcon] = useState(false);
  const [isVideoEnd, setIsVideoEnd] = useState(false);

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
    console.log("video has end", isVideoEnd);
  };

  return (
    <>
      <div className="main_baner_outer_container">
        <div className="main_baner_video_container">
          <video
            src={banerVideo}
            ref={videoRef}
            onEnded={handleVideoEnd}
            autoPlay
            muted
          />
        </div>

        <div className="main_baner_overlay_container">
          <div className="baner_text_container">
            {isVideoEnd && (
              <div className="overlay_inner_container">
                <h2>FIND SHOES THAT MATCHES YOUR STYLE</h2>
                <p>
                  Browse through our diverse range of meticulously crafted
                  garments, designed to bring out your individuality and cater
                  to your sense of style.
                </p>
                <button>Shop Now</button>
              </div>
            )}
          </div>

          <div className="baner_video_play_container">
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

export default Baner;