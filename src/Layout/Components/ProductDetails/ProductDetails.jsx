import "./ProductDetails.css";
import { useState } from "react";
import Reviews from "../Reviews/Reviews";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ProductInfo from "../ProductInfo/ProductInfo";
import UseAxiosPublic from "../../Hooks/axiosPublic/axiosPublic";
import SameCard from "../SameCard/SameCard";

const ProductDetails = () => {
  const product = useLoaderData();
  const axiosPublic = UseAxiosPublic();
  const code = product.productCode;
  const productId = product._id;
  const productCategory = product.category;

  const [quantity, setQuantity] = useState(0);

  // (+)__
  const handleProductPlusCount = () => {
    const plusValue = quantity + 1;
    setQuantity(plusValue);
  }

  // (-)__
  const handleProductMinusCount = () => {
    if(quantity === 0) {
      return;
    }
    const minusValue = quantity - 1;
    setQuantity(minusValue);
  }

  // Get product reviews__
  const {data: reviews = []} = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const {data} = await axiosPublic.get(`/productReview/${code}`);
      return data;
    }
  })

  // Get same products data__
  const {data: sameProducts = [], isLoading} = useQuery({
    queryKey: ["sameProducts"],
    queryFn: async () => {
      const {data} = await axiosPublic.get(`/sameProducts?category=${productCategory}&id=${productId}`)
      return data;
    }
  })

  return (
    <>
      <div className="product_details_main_top_container">
        <div className="product_details_main_inner_container">

          <div className="product_info_main_top_container">
            <ProductInfo product={product} reviews={reviews} quantity={quantity} plus={handleProductPlusCount} minus={handleProductMinusCount} ></ProductInfo>
          </div>
          <div className="product_review_main_top_container"><Reviews reviews={reviews}></Reviews></div>
          <div className="same_product_card_main_top_container"><SameCard sameProducts={sameProducts} isLoading={isLoading}></SameCard></div>

        </div>
      </div>
    </>
  )
}

export default ProductDetails;