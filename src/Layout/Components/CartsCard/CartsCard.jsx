import "./CartsCard.css";
import { RiDeleteBin6Line } from "react-icons/ri";

const CartsCard = () => {
  return (
    <>
      <div className="main_carts_card_container">

        <div className="carts_card_image_container">
          <img
            src="https://i.postimg.cc/BbndkqLW/Athletic-Shoes-2-2.jpg"
            alt="product image"
          />
        </div>

        <div className="carts_card_info_container">

          <div className="title_and_delete_container">
            <h2>Gradient Graphic T-shirt</h2>
            <button>
              <RiDeleteBin6Line />
            </button>
          </div>

          <ul>
            <li>Size: Large</li>
            <li>Color: White</li>
          </ul>

          <ul className="product_price_and_quantity_container">
            <li>$145</li>
            <li>Quantity: 10</li>
          </ul>

        </div>

      </div>
    </>
  );
};

export default CartsCard;
