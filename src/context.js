import React, { useState, useEffect, createContext } from "react";
import placeholder from "./images/placeholder.png";
const url = "https://www.omdbapi.com/?apikey=de486c45&s=";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("godfather");
  const [movies, setMovies] = useState([]);
  const [isExpandSearch, setIsExpandSearch] = useState(false);

  const expand = () => {
    setIsExpandSearch(!isExpandSearch);
  };

  // keep fetch function inside the useffect due to the dependencies warning
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${url}${searchTerm}`);
        // console.log(response);
        const data = await response.json();
        // console.log(data);
        const { Search } = data;
        if (Search) {
          const newMovies = Search.map((item) => {
            const { Title, Year, imdbID, Type, Poster } = item;
            if (Poster === "N/A") {
              return {
                title: Title,
                year: Year,
                id: imdbID,
                type: Type,
                image: placeholder,
              };
            }
            return {
              title: Title,
              year: Year,
              id: imdbID,
              type: Type,
              image: Poster,
            };
          });
          setMovies(newMovies);
          console.log(newMovies);
        } else {
          setMovies([]);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchMovies();
  }, [searchTerm]);

  

  return (
    <AppContext.Provider
      value={{
        loading,
        searchTerm,
        movies,
        setSearchTerm,
        expand,
        isExpandSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
