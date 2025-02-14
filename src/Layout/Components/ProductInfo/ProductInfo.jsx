import "./ProductInfo.css";
import { useState } from "react";
import PropTypes from "prop-types";
import { Rating } from "@smastrom/react-rating";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductInfo = ({ product, reviews, plus, minus, quantity }) => {
  const [productColor, setProductColor] = useState("");
  const [productSize, setproductSize] = useState("");
  console.log(productColor);
  console.log(productSize);

  // Calculate average review__
  const calculateRating = (reviews) => {
    if (reviews.length === 0) {
      return 0;
    }

    const totalReview = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (totalReview / reviews.length).toFixed(1);
  };

  const averageReview = calculateRating(reviews);

  return (
    <>
      <div className="product_info_inner_container">
        <div className="product_image_main_container">
          <Carousel
            showArrows={false}
            emulateTouch={false}
            useKeyboardArrows={true}
          >
            {product.images.map((image) => (
              <img key={image} src={image} alt="img" />
            ))}
          </Carousel>
        </div>

        <div className="product_card_details_main_contaenr">
          <div className="first_details_container">
            <h2>{product.name}</h2>
            <h3>
              <Rating
                style={{ maxWidth: 110 }}
                value={averageReview}
                readOnly
              />
              {averageReview}
            </h3>

            <div className="product_price_section">
              <h2>${product.newPrice}</h2>
              <h3>${product.oldPrice}</h3>
              <h4>{product.savings}</h4>
            </div>

            <p>{product.description}</p>

            <div className="product_color_section">
              <h2>Available Color_</h2>
              <ul>
                {product.availableColors.map((color) => (
                  <li
                    value={color}
                    onClick={(e) =>
                      setProductColor(e.target.getAttribute("value"))
                    }
                    key={color}
                    className={
                      productColor === color ? "selected" : "not_selected"
                    }
                  >
                    {color}
                  </li>
                ))}
              </ul>
            </div>

            <div className="product_size_section">
              <h2>Available Size_</h2>
              <ul>
                {product.sizes.map((size) => (
                  <li
                    value={size}
                    onClick={(e) =>
                      setproductSize(e.target.getAttribute("value"))
                    }
                    key={size}
                    className={
                      productSize === size ? "selected" : "not_selected"
                    }
                  >
                    {size}
                  </li>
                ))}
              </ul>
            </div>

            <div className="product_buy_btn_container">
              <div className="product_count_container">
                <button onClick={plus}>
                  <FiPlus />
                </button>
                <h3>{quantity}</h3>
                <button onClick={minus}>
                  <FiMinus />
                </button>
              </div>
              <button className="product_add_cart_btn_container">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ProductInfo.propTypes = {
  product: PropTypes.object,
  reviews: PropTypes.array,
  plus: PropTypes.func,
  minus: PropTypes.func,
  quantity: PropTypes.number,
  handleSelectedProductData: PropTypes.func,
};

export default ProductInfo;
