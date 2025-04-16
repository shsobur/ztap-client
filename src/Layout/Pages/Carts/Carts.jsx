import { BsCart4 } from "react-icons/bs";
import "./Carts.css";
import CartsCard from "../../Components/CartsCard/CartsCard";

const Carts = () => {
  return (
    <>
      <div className="main_carts_container">
        
        <h1 className="carts_title_container"><BsCart4 /> Your Carts</h1>

        <div className="carts_and_price_container">

          <div className="carts_container">
            <CartsCard></CartsCard>
          </div>
          <div className="price_container">Total price</div>

        </div>

      </div>
    </>
  )
}

export default Carts