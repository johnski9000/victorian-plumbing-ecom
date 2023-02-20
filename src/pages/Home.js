import { useEffect, useState } from "react";
import "../App.css";
import List from "../components/List/List";
import Nav from "../components/Nav/Nav";
import Pagination from "../components/Pagination/Pagination";

function Home() {
  const [geojson, setGeojson] = useState(null);
  const [sliced_data, setSlicedData] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [postPerPage, setPostsPerPage] = useState(6)
  const [showFilter, setShowFilter] = useState(false);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");


  const lastPostIndex = (currentPage * postPerPage)
  const firstPostIndex = lastPostIndex - postPerPage



  useEffect(() => {
    const api_link = 'https://raw.githubusercontent.com/johnski9000/victorianplumbing.github.io/main/data/open_data.geojson'
    async function fetchGeojson() {
      const response = await fetch(api_link);
      // const data = await response.json();
      const data  =  new Promise((resolve, reject) => {
        resolve(response.json());
      });
      data.then((value) => {
        console.log("returned", value[0].item.products);
        const returned_data = value[0].item.products
        setGeojson(returned_data)
        const post_page = returned_data.slice(firstPostIndex, lastPostIndex)
        setSlicedData(post_page)
      });
      
    }
    fetchGeojson();
  }, [currentPage]);


  const handleFilter = () => {
    const filteredData = geojson.filter((item) => item.price.priceIncTax >= minPrice && item.price.priceIncTax <= maxPrice )
    console.log(filteredData)
    const post_page = filteredData.slice(firstPostIndex, lastPostIndex)
    setSlicedData(post_page)
  };

  return (
    <div>
      <Nav/>
      
      <div className="product_container_main">
        <div className="product_filter_container">
        <div className="filter_title">Filter By</div>
        <div className="price_filter" onClick={() => setShowFilter(!showFilter)}>
          Price
        </div>
        {showFilter && (
        <div className="price_container">
          <label htmlFor="minPrice">£</label>
          <input
            type="number"
            id="minPrice"
            placeholder="Min"
            value={minPrice}
            className="price_field"
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <label htmlFor="maxPrice">to </label>
          <input
            type="number"
            id="maxPrice"
            placeholder="Max"
            value={maxPrice}
            className="price_field"
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <button onClick={handleFilter} className="price_button">Go</button>
        </div>
      )}
        </div>
        <div className="product_filter_container_mobile">
          <div className="filter_container" onClick={() => setShowMobileFilter(!showMobileFilter)}>&nbsp;Filter by <img src="https://i8.amplience.net/i/jpl/align-right-c924780155a60f48b3c1ae11c1670b69" alt=""/></div>
          <div className="recommended_container">&nbsp;Recommended <img src="https://i8.amplience.net/i/jpl/down-arrow-69de8d56a8845fcd5d6a0c65dc2b8c52" alt=""/></div>
        </div>
        {showMobileFilter === true && (
          <div className="mobile_absolute_filter">
            <div className="mobile_relative_filter">
              <div className="close_mobile"><div className="filter_mobile">Filter By</div><div className="close_mobile_button" onClick={() => setShowMobileFilter(!showMobileFilter)}>Close</div></div>
            <div className="price_filter" onClick={() => setShowFilter(!showFilter)}>
          Price
        </div>
        {showFilter && (
        <div className="price_container">
          <label htmlFor="minPrice">£</label>
          <input
            type="number"
            id="minPrice"
            placeholder="Min"
            value={minPrice}
            className="price_field"
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <label htmlFor="maxPrice">to </label>
          <input
            type="number"
            id="maxPrice"
            placeholder="Max"
            value={maxPrice}
            className="price_field"
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <button onClick={handleFilter} className="price_button">Go</button>
        </div>
      )}
            </div>
             
          </div>
          
        )}
        <div className="list_amount">{
            geojson ?   <div>{geojson.length}  items</div> : <div>Loading...</div>
          }</div>
        <div className="product_container">
          {
            sliced_data ?  <List list_data={sliced_data} /> : <div>Loading...</div>
          }
          {
            sliced_data ? <Pagination
            totalPosts={geojson.length}
            postPerPage={postPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            /> : null
          }
        </div>
      </div>
    </div>
  );

}

export default Home;