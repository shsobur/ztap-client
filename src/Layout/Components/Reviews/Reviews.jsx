import "./Reviews.css";
import PropTypes from "prop-types";
import { BsThreeDots } from "react-icons/bs";
import { Rating } from "@smastrom/react-rating";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Reviews = ({ reviews }) => {
  return (
    <>
      <div className="review_main_top_container">
        <div className="review_main_navigate_bar">
          Review ({reviews.length})
        </div>
        <div className="review_main_content_container">
          {reviews.map((review) => (
            <div key={review._id} className="review_main_card_container">
              <div className="review_rating_container">
                <div>
                  {" "}
                  <Rating
                    style={{ maxWidth: 120 }}
                    value={review.rating}
                    readOnly
                  />
                </div>
                <h3>
                  <BsThreeDots />
                </h3>
              </div>

              <div className="review_text_content_container">
                <h2>
                  <span>{review.userName}</span> <IoMdCheckmarkCircleOutline />
                </h2>
                <p>{review.message}</p>
                <h3>Posted on {review.postTime}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="review_load_btn">
          <button>Load More Reviews</button>
        </div>
      </div>
    </>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.object,
};

export default Reviews;