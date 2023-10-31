import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Movie = () => {
    const navigate = useNavigate();
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Make an API request", id);
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=a45ba63203b4c78cc54766f5cd17d543`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false);
      });
  }, [id]);

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetails) {
      const movieImage = movieDetails.poster_path;
      const posterPath = `https://image.tmdb.org/t/p/w500${movieImage}`;

      let backdropUrl = "";
      if (movieDetails.backdrop_path) {
        backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
      } else {
        backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.poster_path}`;
      }

      return (
        <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                {movieImage ? (
                  <img
                    src={posterPath}
                    className="img-fluid shadow rounded"
                    alt={movieDetails.original_title}
                  />
                ) : (
                  <img
                    src="https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg"
                    className="img-fluid shadow rounded"
                    alt="..."
                  />
                )}
                <button className="btn btn-primary my-5" onClick={()=>navigate(-1)}>
                  Back
                </button>
              </div>
              <div className="col-md-9">
                <h2>{movieDetails.original_title}</h2>
                <h5>Overview</h5>
                <p className="lead">{movieDetails.overview}</p>
                <h5>Status</h5>
                <p className="lead">{movieDetails.status}</p>
                <h5>Release Date</h5>
                <p className="lead">{movieDetails.release_date}</p>
                <h5>Runtime</h5>
                <p className="lead">{movieDetails.runtime} min</p>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
  return renderMovieDetails();
};

export default Movie;
