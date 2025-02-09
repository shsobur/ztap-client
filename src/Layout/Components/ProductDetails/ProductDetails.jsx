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

  const [quantity, setQuantity] = useState(0);
  const [productId, setProductId] = useState("Sneakers");
  const [productCategory, setProductCategory] = useState("");

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

  // Get product reviews__
  const {data: reviews = []} = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const {data} = await axiosPublic.get(`/productReview/${code}`);
      return data;
    }
  })

  // Get the product value that clicked__
  const handleProductData = (category, id) => {
    setProductId(id);
    setProductCategory(category);
  }

  const {data: sameCards = []} = useQuery({
    queryKey: ["sameCards"],
    queryFn: async () => {
      const {data} = await axiosPublic.get(`/sameCards/${productId}?category=${productCategory}`);
      return data;
    }
  })

  console.log(sameCards);

  return (
    <>
      <div className="product_details_main_top_container">
        <div className="product_details_main_inner_container">

          <div className="product_info_main_top_container">
            <ProductInfo product={product} reviews={reviews} quantity={quantity} plus={handleProductPlusCount} minus={handleProductMinusCount} handleProductData={handleProductData}></ProductInfo>
          </div>
          <div className="product_review_main_top_container"><Reviews reviews={reviews}></Reviews></div>
          <div className="same_product_card_main_top_container"><SameCard></SameCard></div>

        </div>
      </div>
    </>
  )
}

export default ProductDetails;