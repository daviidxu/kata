import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { MovieCard } from "../";

import "./Dashboard.scss";

export const Dashboard = (props) => {
  // console.log(`${process.env.REACT_APP_API_URL}/api/getAllMovie`);
  const [allMovies, setAllMovies] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(18);
  const [currentMovies, setCurrentMovies] = useState(null);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/getAllMovie`)
      .then((res) => res.json())
      .then((result) => {
        setAllMovies(result.movies);
      });
  }, []);

  useEffect(() => {
    setCurrentMovies(allMovies?.slice(indexOfFirstMovie, indexOfLastMovie));
  }, [allMovies]);

  console.log(currentMovies);

  return (
    <div className="dashboard">
      {currentMovies?.map((elem, index) => {
        return <MovieCard {...elem} key={index} />;
      })}
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
