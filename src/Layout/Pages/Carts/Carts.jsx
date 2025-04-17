import "./Carts.css";
import { BsCart4 } from "react-icons/bs";
import CartsCard from "../../Components/CartsCard/CartsCard";
import { LuMoveRight } from "react-icons/lu";

const Carts = () => {
  return (
    <>
      <div className="main_carts_container">
        <h1 className="carts_title_container">
          <BsCart4 /> Your Carts
        </h1>

        <div className="carts_and_price_container">
          <div className="carts_container">
            <CartsCard></CartsCard>
          </div>

          <div className="price_container">
            <h2>Order Summary</h2>

            <div className="order_info_container">
              <ul id="order_amount">
                <li>Subtotal</li>
                <li>$1400</li>
              </ul>

              <ul id="order_discount">
                <li>First Order Discount (-20%)</li>
                <li>- $144</li>
              </ul>

              <ul id="order_total">
                <li>Total</li>
                <li>$98679</li>
              </ul>
            </div>

            <button id="checkout_btn">
              Go to Checkout <LuMoveRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carts;
