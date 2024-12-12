import "./ShopPageLayout.css";
// React icons__
import { LuFilter } from "react-icons/lu";
import { GoSearch } from "react-icons/go";
import { IoIosMenu } from "react-icons/io";
import { GrPowerReset } from "react-icons/gr";

import { useCallback, useEffect, useState } from "react";
import UseAxiosPublic from "../../../Hooks/axiosPublic/axiosPublic";
import LoadingSpinner from "../../../Components/LoadingSpinner/LoadingSpinner";
import ShopingProductCart from "../../../Components/ShopingProductCart/ShopingProductCart";
import { CiSquareChevLeft, CiSquareChevRight } from "react-icons/ci";

const ShopPageLayout = () => {
  const axiosPublic = UseAxiosPublic();

  const [sizeNames, setSizeNames] = useState([]);
  const [categoryNames, setCategoryNames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

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

  // Get only sizes__
  useEffect(() => {
    axiosPublic.get("/sizes").then((res) => {
      setSizeNames(res.data);
    });
  }, [axiosPublic]);

  // Get data by filter__
  const fatchData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axiosPublic.get(
        `/allProducts?name=${search}&page=${page}$limit=${9}&category=${category}&status=${status}&size=${size}&sort=${sort}`
      );
      setProducts(res.data.result);
      setTotalPage(Math.ceil(res.data.totalProduct / 9));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, [axiosPublic, category, search, page, size, sort, status]);

  useEffect(() => {
    fatchData();
  }, [fatchData]);

  // Page handler__
  const handlePageChange = (newPage) => {
    if(newPage > 0 && newPage <= totalPage) {
      setPage(newPage);
      window.scrollTo({top: 0, behavior: "smooth"});
    }
  }

  const handleReset = () => {
    setSize("");
    setSearch("");
    setStatus("");
    setSort("asc");
    setCategory("");

    fatchData();
  };

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
                <select value={sort} onChange={(e) => setSort(e.target.value)}>
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
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                  <option value="" disabled selected>
                    Choose
                  </option>
                  <option value="new">New arrivals</option>
                  <option value="topSell">Top sell product</option>
                </select>
              </div>

              <div className="size_filter_container">
                <h2>Size_</h2>
                <div className="size_categotu_content_container">
                  {sizeNames.map((sizeName) => (
                    <h3
                      key={sizeName.sizes}
                      value={sizeName.sizes}
                      onClick={handleSize}
                    >
                      {sizeName.sizes}
                    </h3>
                  ))}
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
              <div className="shop_item_filter_container">
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

                <div onClick={handleReset} className="filter_reset_container">
                  <button>
                    <GrPowerReset /> Reset
                  </button>
                </div>
              </div>
            </form>

            <div className="main_product_card_container">
              {loading ? (
                <div className="mt-40">
                  <LoadingSpinner></LoadingSpinner>
                </div>
              ) : (
                <div className="main_product_card_inner_container">
                  {products.map((product) => (
                    <ShopingProductCart
                      key={product._id}
                      cardItem={product}
                    ></ShopingProductCart>
                  ))}
                </div>
              )}
            </div>

            <div className="pagination_container">
              <h3 onClick={() => handlePageChange(page - 1)}><CiSquareChevLeft /></h3>
              <p>Page {page} of {totalPage}</p>
              <h3 onClick={() => handlePageChange(page + 1)}><CiSquareChevRight /></h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPageLayout;