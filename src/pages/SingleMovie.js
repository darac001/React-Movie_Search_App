import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { FaImdb } from "react-icons/fa";
import { BsDot } from "react-icons/bs";

const url = "http://www.omdbapi.com/?apikey=de486c45&i=";

const SingleMovie = () => {
  const { id } = useParams();
  const [imdbId, setImdbId] = useState("");
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const [awrd, setAwrd] = useState(true);
  const getMovie = async () => {
    setLoading(true);
    setAwrd(false);
    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      console.log(data);
      if (data) {
        const {
          imdbID,
          Actors,
          Awards,
          Director,
          Genre,
          Plot,
          Year,
          Writer,
          Title,
          Poster,
          Rated,
          Runtime,
        } = data;
        const newMovie = {
          imdb: imdbID,
          actors: Actors,
          awards: Awards,
          director: Director,
          genre: Genre,
          plot: Plot,
          released: Year,
          write: Writer,
          title: Title,
          image: Poster,
          rated: Rated,
          runtime: Runtime,
        };
        console.log(newMovie);
        setMovie(newMovie);
        setLoading(false);
        if (Awards) {
          setAwrd(true);
        }
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getMovie();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!movie) {
    return <h2>No movie to display</h2>;
  } else {
    const {
      imdb,
      actors,
      awards,
      director,
      genre,
      plot,
      released,
      writer,
      title,
      image,
      rated,
      runtime,
    } = movie;
    let x = imdb;
    const imdb1 = "https://www.imdb.com/title/" + x;

    return (
      <section className="movie-section">
        <Card style={{ width: "60rem" }}>
          <div className="movie-card">
            <Card.Img variant="top" src={image} />
            <Card.Body className="movie-info">
              <Card.Title className="movie-text">{title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {released} <BsDot /> {rated} <BsDot /> {runtime}
              </Card.Subtitle>

              <Card.Text>
                <a href={imdb1}>
                  <FaImdb className="movie-imdb-icon" />
                </a>
              </Card.Text>
              <Table hover>
                <tbody>
                  <tr>
                    <td>Genre:</td>
                    <td>{genre}</td>
                  </tr>
                  <tr>
                    <td>Actors:</td>
                    <td>{actors}</td>
                  </tr>
                  <tr>
                    <td>Director:</td>
                    <td>{director}</td>
                  </tr>

                  <tr>
                    <td>Plot:</td>
                    <td>{plot}</td>
                  </tr>
                  <tr className={`${awrd ? "" : "hide-award"}`}>
                    <td>Awards:</td>
                    <td>{awards}</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </div>
        </Card>
      </section>
    );
  }
};

export default SingleMovie;
