import Hero from "./Hero";

const About = () => {
  return (
    <>
      <Hero text="About Us"/>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead impact">
              Not much to say but hope you enjoy this homework project for React201 by Kalob Taulien.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
