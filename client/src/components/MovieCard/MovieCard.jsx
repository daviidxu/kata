import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as Picture } from "../../assets/icon_poster.svg";

import "./MovieCard.scss";

export const MovieCard = ({
  endYear,
  genres,
  isAdult,
  originalTitle,
  primaryTitle,
  runtimeMinutes,
  startYear,
  tconst,
  titleType,
}) => {
  return (
    <div className="movie__card">
      <div className="movie__card__information">
        <div className="movie__card__titles">
          <h2>{primaryTitle}</h2>
          <p>Original title: {originalTitle}</p>
        </div>
        <div className="movie__card__extra__details">
          <div className="details__text">
            <p>ID</p>
            <p>{tconst}</p>
          </div>
          <div className="details__text">
            <p>Minutes</p>
            <p>{runtimeMinutes}</p>
          </div>
          <div className="details__text">
            <p>Start year</p>
            <p>{startYear}</p>
          </div>
          <div className="details__text">
            <p>End year</p>
            <p>{endYear === "\\N" ? "-" : endYear}</p>
          </div>
          <div className="details__text">
            <p>Is adult</p>
            <p>{isAdult === "0" ? "No" : "Yes"}</p>
          </div>
          <div className="details__text">
            <p>Genres</p>
            <p>{genres}</p>
          </div>
        </div>
      </div>
      <div className="movie__card__picture">
        <Picture />
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  endYear: PropTypes.string,
  genres: PropTypes.string,
  isAdult: PropTypes.string,
  originalTitle: PropTypes.string,
  primaryTitle: PropTypes.string,
  runtimeMinutes: PropTypes.string,
  startYear: PropTypes.string,
  tconst: PropTypes.string,
  titleType: PropTypes.string,
};

export default MovieCard;
