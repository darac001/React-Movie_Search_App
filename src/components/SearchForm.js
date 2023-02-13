import React, { useContext} from "react";
import { AppContext } from "../context";


const SearchForm = () => {
  const { searchTerm, setSearchTerm, expand, isExpandSearch } =
    useContext(AppContext);
  

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const emptySearch = () => {
    setSearchTerm("")
  }

 

  return (
    <section className="search-section ">
      <div id="content">
        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="name">search your favorite movie or a show</label> */}
          <input
            type="text"
            className={`${isExpandSearch ? "input square" : "input"}`}
            name="input"
            id="search-input"
            value={searchTerm}
            onClick={emptySearch}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="reset"
            className={`${isExpandSearch ? "search close" : "search"}`}
            id="search-btn"
            onClick={expand}
          ></button>
          
        </form>
      </div>
    </section>
  );
};

export default SearchForm;


