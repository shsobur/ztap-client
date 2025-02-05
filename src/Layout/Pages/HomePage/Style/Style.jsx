import "./Style.css";

const Style = () => {
  return (
    <>
      <div className="style_main_top_container">
        <h1>BROWSE BY SHOES STYLE</h1>

        <div className="style_image_main_container">
          <div className="style_images" id="image_1"></div>
          <div className="style_images" id="image_2"></div>
          <div className="style_images" id="image_3"></div>
          <div className="style_images" id="image_4"></div>
        </div>

        <div className="style_btn_container">
          <button className="button-86" role="button">Shop Now!</button>
        </div>
      </div>
    </>
  );
};

export default Style;