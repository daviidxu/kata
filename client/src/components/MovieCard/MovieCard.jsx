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
    <div className="col-xl-4 col-md-6 col-sm-12 gx-2 gy-2">
      <div className="row movie__card">
        <div className="movie__card__information col-xl-9">
          <div className="row movie__card__titles">
            <h2>{primaryTitle}</h2>
            <p>Original title: {originalTitle}</p>
          </div>
          <div className="row movie__card__extra__details">
            <div className="details__text col-xl-3">
              <p>ID</p>
              <p>{tconst}</p>
            </div>
            <div className="details__text col-xl-3">
              <p>Minutes</p>
              <p>{runtimeMinutes}</p>
            </div>
            <div className="details__text col-xl-3">
              <p>Start year</p>
              <p>{startYear}</p>
            </div>
            <div className="details__text col-xl-3">
              <p>End year</p>
              <p>{endYear === "\\N" ? "-" : endYear}</p>
            </div>
            <div className="details__text col-xl-3">
              <p>Is adult</p>
              <p>{isAdult === "0" ? "No" : "Yes"}</p>
            </div>
            <div className="details__text col-xl-3">
              <p>Genres</p>
              <p>{genres}</p>
            </div>
          </div>
        </div>
        <div className="movie__card__picture col-xl-3">
          <Picture />
        </div>
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
