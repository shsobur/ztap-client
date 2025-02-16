import "./ProductInfo.css";
import Swal from "sweetalert2";
import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Carousel } from "react-responsive-carousel";
import useUserData from "../../Hooks/userData/useUserData";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useAxiosSecure from "../../Hooks/axiosSecure/axiosSecure";
import useCart from "../../Hooks/useCart/useCart";

const ProductInfo = ({
  product,
  reviews,
  plus,
  minus,
  quantity,
  setQuantity,
}) => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { userRole, userNumber, userEmail } = useUserData();
  const [, refetch] = useCart();
  const [productColor, setProductColor] = useState("");
  const [productSize, setproductSize] = useState("");

  // Calculate average review__
  const calculateRating = (reviews) => {
    if (reviews.length === 0) {
      return 0;
    }

    const totalReview = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (totalReview / reviews.length).toFixed(1);
  };

  const averageReview = calculateRating(reviews);

  // Cart product data__
  const cartData = {
    quantity,
    name: product.name,
    color: productColor,
    size: productSize,
    price: product.newPrice,
    image: product.images[0],
    productCode: product.productCode,
    userEmail,
    userNumber,
  };

  // Handle cart data__
  const handleAddToCart = () => {
    if (userRole === "buyer") {
      if (quantity > 0 && productColor && productSize) {
        axiosSecure
          .post("/cart", cartData)
          .then((res) => {
            if (res.data.acknowledged) {
              const Toast = Swal.mixin({
                toast: true,
                position: "bottom",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                },
              });
              Toast.fire({
                icon: "success",
                title: "Cart added successfully",
              });

              setProductColor("");
              setproductSize("");
              setQuantity(0);

              refetch();
            }
          })

          .catch((error) => {
            console.log("Added to card failed", error);
          });
      } else {
        Swal.fire("Wait! seclect product color, size and quantity you need!");
      }
    } else if (userRole === "admin") {
      Swal.fire("Sorry admin can't add product to cart");
    } else {
      Swal.fire({
        title: "Login first!",
        text: "Without login you can't add this to cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#008001",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signUp");
        }
      });
    }
  };

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
              <button
                onClick={handleAddToCart}
                className="product_add_cart_btn_container"
              >
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
  setQuantity: PropTypes.number,
  handleSelectedProductData: PropTypes.func,
};

export default ProductInfo;
