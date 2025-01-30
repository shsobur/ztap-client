import "./ProductInfo.css";
import PropTypes from 'prop-types';
import { FiMinus, FiPlus } from "react-icons/fi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductInfo = ({plus, minus, quantity}) => {
  return (
    <>
      <div className="product_info_inner_container">

        <div className="product_image_main_container">
          <Carousel
            showArrows={false}
            emulateTouch={false}
            useKeyboardArrows={true}
          >
            <div>
              <img src="https://i.postimg.cc/ncPJ8QG3/Athletic-Shoes-1-1.jpg" />
            </div>

            <div>
              <img src="https://i.postimg.cc/3wg5Df5q/Athletic-Shoes-1-2.jpg" />
            </div>

            <div>
              <img src="https://i.postimg.cc/fLKG83bj/Athletic-Shoes-1-3.jpg" />
            </div>
          </Carousel>
        </div>

        <div className="product_card_details_main_contaenr">
          <div className="first_details_container">

            <h2>One Life Graphic T-shirt</h2>
            <h3>⭐⭐⭐⭐ 4/5</h3>

            <div className="product_price_section">
              <h2>$150</h2>
              <h3>$170</h3>
              <h4>-43%</h4>
            </div>

            <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>

            <div className="product_color_section">
              <h2>Available Color-</h2>
              <ul>
                <li>Black</li>
                <li>Red</li>
                <li>Purple</li>
                <li>Brown</li>
              </ul>
            </div>

            <div className="product_size_section">
              <h2>Available Size</h2>
              <ul>
                <li>Small</li>
                <li>Medium</li>
                <li>xl</li>
                <li>2xl</li>
              </ul>
            </div>

            <div className="product_buy_btn_container">
              <div className="product_count_container">
                <button onClick={plus}><FiPlus /></button>
                  <h3>{quantity}</h3>
                <button onClick={minus}><FiMinus /></button>
              </div>
              <button className="product_add_cart_btn_container">Add to Cart</button>
            </div>

          </div>
        </div>

      </div>
    </>
  );
};

ProductInfo.propTypes = {
  plus: PropTypes.func,
  minus: PropTypes.func,
  quantity: PropTypes.number
}

export default ProductInfo;
