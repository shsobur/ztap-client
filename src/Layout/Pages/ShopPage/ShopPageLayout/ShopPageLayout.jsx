import "./ShopPageLayout.css";
import { useEffect, useState } from "react";
import { LuFilter } from "react-icons/lu";
import { GoSearch } from "react-icons/go";
import { IoIosMenu } from "react-icons/io";
import UseAxiosPublic from "../../../Hooks/axiosPublic/axiosPublic";

const ShopPageLayout = () => {
  const axiosPublic = UseAxiosPublic();
  const [categoryNames, setCategoryNames] = useState([]);

  // Filter value_
  const [size, setSize] = useState("");
  const [sort, setSort] = useState("asc");
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  // Search filter value__
  const handleSearch = (e) => {
    e.preventDefault();

    const searchValue = e.target.search.value;
    setSearch(searchValue);
    e.target.search.value = "";
  };

  // Category filter value__
  const hndleCategory = (e) => {
    const categotyValue = e.target.getAttribute("value");
    setCategory(categotyValue);
  };

  // Size filter value__
  const handleSize = (e) => {
    const sizeValue = e.target.getAttribute("value");
    setSize(sizeValue);
  };

  // Get only categorys__
  useEffect(() => {
    axiosPublic.get("/categorys").then((res) => {
      setCategoryNames(res.data);
    });
  }, [axiosPublic]);

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
                <h3>
                  <LuFilter />
                </h3>
              </div>

              <div className="price_filter_container">
                <h2>Price_</h2>
                <select onChange={(e) => setSort(e.target.value)}>
                  <option value="asc">Low to High</option>
                  <option value="desc">Hign to low</option>
                </select>
              </div>

              <div className="category_filter_container">
                <h2>Category_</h2>
                <div className="filter_categotu_content_container">
                  {categoryNames.map((categoryName) => (
                    <h3
                      key={categoryName.category}
                      value={categoryName.category}
                      onClick={hndleCategory}
                    >
                      {categoryName.category}
                    </h3>
                  ))}
                </div>
              </div>

              <div className="status_filter_container">
                <h2>Status_</h2>
                <select onChange={(e) => setStatus(e.target.value)}>
                  <option value="none" disabled selected>
                    Choose
                  </option>
                  <option value="new">New arrivals</option>
                  <option value="topSell">Top sell product</option>
                </select>
              </div>

              <div className="size_filter_container">
                <h2>Size_</h2>
                <div className="size_categotu_content_container">
                  <h3 value="small" onClick={handleSize}>
                    Small
                  </h3>
                  <h3 value="medium" onClick={handleSize}>
                    Medium
                  </h3>
                  <h3 value="xl" onClick={handleSize}>
                    xl
                  </h3>
                  <h3 value="2xl" onClick={handleSize}>
                    2xl
                  </h3>
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
            <form onSubmit={handleSearch}>
              <div className="search_bar_container">
                <input
                  type="text"
                  name="search"
                  placeholder="Search products"
                />
                <button type="submit">
                  <GoSearch />
                </button>
              </div>
            </form>

            <div className="main_product_card_container"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPageLayout;
