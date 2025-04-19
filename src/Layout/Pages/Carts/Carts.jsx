import "./Carts.css";

import { BsCart4 } from "react-icons/bs";
import { LuMoveRight } from "react-icons/lu";
import useCart from "../../Hooks/useCart/useCart";
import CartsCard from "../../Components/CartsCard/CartsCard";

const Carts = () => {
  const [carts] = useCart();
  const discount = 10;

  const handleTotalPrice = (products) => {
    return products.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const totalPrice = handleTotalPrice(carts);
  const discountPrice = totalPrice - (totalPrice * discount) / 100;
  const savedMony = totalPrice - discountPrice;

  return (
    <>
      <div className="main_carts_container">
        <h1 className="carts_title_container">
          <BsCart4 /> Your Carts
        </h1>

        <div className="carts_and_price_container">
          <div className="carts_container">
            {carts.map((cart) => (
              <CartsCard key={cart._id} cart={cart}></CartsCard>
            ))}
            {/* <CartsCard></CartsCard> */}
          </div>

          <div className="price_container">
            <h2>Order Summary</h2>

            <div className="order_info_container">
              <ul id="order_amount">
                <li>Subtotal</li>
                <li>${totalPrice}</li>
              </ul>

              <ul id="order_discount">
                <li>Discount (-10%)</li>
                <li>- ${savedMony}</li>
              </ul>

              <ul id="order_total">
                <li>Total</li>
                <li>${discountPrice}</li>
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
