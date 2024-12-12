import PropTypes from "prop-types";
import "./ShopingProductCart.css";
import { BsCartPlus } from "react-icons/bs";

const ShopingProductCart = ({ cardItem }) => {
  return (
    <>
      <div className="shoping_cart_section_outer_container">
        <div className="main_shoping_cart_section_container">
          <div className="shoping_cart_image_container">
            <img src={cardItem.images[0]} alt="Product image" />
          </div>

          <div className="shoping_item_info_container">
            <div className="shoping_cart_header_container">
              <h2>
                {cardItem.name.length < 20
                  ? `${cardItem.name}`
                  : `${cardItem.name.slice(0, 20)}...`}
              </h2>
              <h4>{cardItem.category}</h4>
            </div>

            <div className="shoping_cart_footer_container">
              <h2>${cardItem.newPrice}</h2>
              <h3>${cardItem.oldPrice}</h3>
              <h4>{cardItem.savings}</h4>
            </div>

            <div className="cart_btn_container">
              <button>
                <BsCartPlus />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ShopingProductCart.propTypes = {
  cardItem: PropTypes.object,
};

export default ShopingProductCart;
