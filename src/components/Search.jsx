//TMDB API key a45ba63203b4c78cc54766f5cd17d543

import Hero from "./Hero";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const posterImage = movie.poster_path;
  const posterUrl = `https://image.tmdb.org/t/p/w500${posterImage}`;
  const detailUrl = `/movies/${movie.id}`;

  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card">
        {posterImage ? (
          <img
            src={posterUrl}
            className="card-img-top"
            alt={movie.original_title}
          />
        ) : (
          <img
            src="https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg"
            className="img-fluid shadow rounded"
            alt="..."
          />
        )}
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailUrl} className="btn btn-primary">
            Show details
          </Link>
        </div>
      </div>
    </div>
  );
};

const Search = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;

  const resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });

  let isSearchResults = false;
  if (searchResults.length > 0) {
    isSearchResults = true;
  }

  console.log(searchResults.length);

  return (
    <>
      <Hero text={title} />
      {isSearchResults ? (
        <div className="container">
          <div className="row">{resultsHtml}</div>
        </div>
      ) : (
        <div className="container">
          <div className="row my-5">
            <h2> No search results found!</h2>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
