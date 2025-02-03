import "./ProductDetails.css";
import { useState } from "react";
import ProductInfo from "../ProductInfo/ProductInfo";
import { useLoaderData } from "react-router-dom";
import UseAxiosPublic from "../../Hooks/axiosPublic/axiosPublic";
import { useQuery } from "@tanstack/react-query";

const ProductDetails = () => {
  const product = useLoaderData();
  const axiosPublic = UseAxiosPublic();
  // console.log(product.productCode)
  const code = product.productCode;

  const [quantity, setQuantity] = useState(0);

  const handleProductPlusCount = () => {
    const plusValue = quantity + 1;
    setQuantity(plusValue);
  }

  const handleProductMinusCount = () => {
    if(quantity === 0) {
      return;
    }
    const minusValue = quantity - 1;
    setQuantity(minusValue);
  }

  // Get reviews__
  const {data: reviews = [],} = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const {data} = await axiosPublic.get(`/productReview/${code}`);
      return data;
    }
  })

  console.log(reviews);

  return (
    <>
      <div className="product_details_main_top_container">
        <div className="product_details_main_inner_container">

          <div className="product_info_main_top_container">
            <ProductInfo product={product} quantity={quantity} plus={handleProductPlusCount} minus={handleProductMinusCount}></ProductInfo>
          </div>
          <div className="product_review_main_top_container">Reviews</div>
          <div className="same_product_card_main_top_container">Same card</div>

        </div>
      </div>
    </>
  )
}

export default ProductDetails;