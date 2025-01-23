import ProductInfo from "../ProductInfo/ProductInfo";
import "./ProductDetails.css";

const ProductDetails = () => {
  return (
    <>
      <div className="product_details_main_top_container">
        <div className="product_details_main_inner_container">

          <div className="product_info_main_top_container">
            <ProductInfo></ProductInfo>
          </div>
          <div className="product_review_main_top_container">Reviews</div>
          <div className="same_product_card_main_top_container">Same card</div>

        </div>
      </div>
    </>
  )
}

export default ProductDetails;