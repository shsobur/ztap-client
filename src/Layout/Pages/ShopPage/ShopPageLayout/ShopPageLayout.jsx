import "./ShopPageLayout.css";
import { LuFilter } from "react-icons/lu";
import { IoIosMenu } from "react-icons/io";

const ShopPageLayout = () => {
  return (
    <>
      <div className="shop_main_container">
        <div className="shop_section_main_container">

          <div className="shop_filter_section_container">

            <div className="filter_memu_icon_container">
              <IoIosMenu />
            </div>

            <div className="shop_filter_inner_content_container">
              
              <div className="filter_title_container">
                <h2>Filters</h2>
                <h3><LuFilter /></h3>
              </div>

              <div className="price_filter_container">
                <h2>Price_</h2>
                <select>
                  <option value="asc">Low to High</option>
                  <option value="desc">Hign to low</option>
                </select>
              </div>

              <div className="category_filter_container">
                <h2>Category_</h2>
                <div className="filter_categotu_content_container">
                  <h3 value="Athletic">Athletic</h3>
                  <h3 value="Hiking">Hiking</h3>
                  <h3 value="Sneakers">Sneakers</h3>
                  <h3 value="Formal">Formal</h3>
                </div>
              </div>

              <div className="status_filter_container">
                <h2>Status_</h2>
                <select>
                  <option value="none" disabled selected>Choose</option>
                  <option value="new">New arrivals</option>
                  <option value="topSell">Top sell product</option>
                </select>
              </div>

              <div className="size_filter_container">
                <h2>Size_</h2>
                <div className="size_categotu_content_container">
                  <h3 value="small">Small</h3>
                  <h3 value="medium">Medium</h3>
                  <h3 value="xl">xl</h3>
                  <h3 value="2xl">2xl</h3>
                </div>
              </div>

              <div className="color_filter_container">
                <h2>Color_</h2>
                <div className="color_categotu_content_container">
                  <div id="color_1"></div>
                  <div id="color_2"></div>
                  <div id="color_3"></div>
                  <div id="color_4"></div>
                  <div id="color_5"></div>
                  <div id="color_6"></div>
                  <div id="color_7"></div>
                  <div id="color_8"></div>
                  <div id="color_9"></div>
                </div>
              </div>

            </div>
          </div>

          <div className="shop_item_section_container">
            <div className="search_bar_container">
              
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ShopPageLayout;
