import React, { useContext} from "react";
import Movie from "./Movie";
import Loading from "./Loading";
import { AppContext } from "../context";


function MovieList() {
  const { movies, loading } = useContext(AppContext);
  
  
  if (loading) {
    return <Loading />;
  }

  if (movies.length < 1) {
    return <h2 className="section-title-left">no movies match your criteria</h2>;
  }
  return (
    <section className="section">
      <h3 className="section-title">Search Results</h3>
      <div className="movies-center">
        {movies.map((item) => {

          return <Movie key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

export default MovieList;
