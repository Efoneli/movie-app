import React from "react";

const Card = (movie) => {
  console.log(movie.info);
  let img_path = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      <div className="movie">
        <img src={img_path + movie.info.poster_path} alt='rep' className="poster" />
        <div className="movie-details">
          <div className="box">
            <h4 className="title font-bold">{movie.info.title}</h4>
            <p className="rating">{movie.info.vote_average}</p>
          </div>
          <h6 className="release mr-6 italic">
            Released: {movie.info.release_date}
          </h6>

          <div className="overview">
            <h1 className="font-bold text-2xl underline">Overview</h1>
            <div className="text-sm">{movie.info.overview}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
