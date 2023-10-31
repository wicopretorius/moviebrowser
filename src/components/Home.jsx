import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text="Welcome Users" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead impact">
              Welcome to this awesome movie search engine sponsered by{" "}
              <a
                href="https://www.themoviedb.org"
                className="btn btn-sm btn-outline-dark"
              >
                The Movie DB
              </a>
            </p>
            <p className="lead impact">
              The site is part of a homework project for a skillshare.com course
              named React201 by Kalob Taulien.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
