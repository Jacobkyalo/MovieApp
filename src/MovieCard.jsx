import React from "react";
import { image_url } from "./config/config";
import { no_poster_img } from "./config/config";
import "./MovieCard.css";
import { Badge } from "@mui/material";

const MovieCard = ({ movie }) => {
  return (
    <>
      <Badge
        badgeContent={movie.vote_average}
        color={movie.vote_average > 6 ? "primary" : "secondary"}
        sx={{ right: "20px" }}
      >
        {movie && (
          <div className="card__content">
            <img
              src={
                movie.poster_path
                  ? `${image_url}${movie.poster_path}`
                  : `${no_poster_img}`
              }
              alt={movie?.title || movie?.original_title || movie?.name}
              className="poster"
            />
          </div>
        )}
      </Badge>
    </>
  );
};

export default MovieCard;