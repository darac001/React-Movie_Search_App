import React, { useState } from "react";
import { Link } from "react-router-dom";
import placeholder from "../images/placeholder.png";

function Movie(props) {
  const { title, year, id, type, image } = props;

  // const handleClick = () => {
  //   this.context.router.push(`/movie/${id}`);
  // };
  return (
    <Link to={`/movie/${id}`} className="movie-link">
    <article className="home-movie">
      <div className="img-container">
        <img src={image} alt="no image" />
      </div>
      <div className="home-movie-footer">
        <h2>{title}</h2>
        <h4>{year}</h4>
        <p>{type}</p>
        <Link to={`/movie/${id}`} className="btn btn-primary">
          details
        </Link>
      </div>
      </article>
      </Link>
  );
}

export default Movie;
