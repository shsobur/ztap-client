import PropTypes from "prop-types";
import "./AllProductCards.css";

const AllProductCards = ({ cartItem }) => {
  return (
    <>
      <div>
        <div className="main_container">
          <div className="all_cart_section_outer_container">
            <div className="main_all_cart_section_container">
              <div className="ptodict_cart_image_container">
                <img src={cartItem.images[0]} alt="Prodict image" />
              </div>

              <div className="product_item_info_container">
                <div className="product_cart_header_container">
                  <h2>{cartItem.name}</h2>
                  <h4>{cartItem.category}</h4>
                </div>

                <div className="product_cart_footer_container">
                  <h2>${cartItem.newPrice}</h2>
                  <h3>${cartItem.oldPrice}</h3>
                  <h4>{cartItem.savings}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AllProductCards.propTypes = {
  cartItem: PropTypes.object,
};

export default AllProductCards;
