import "./PageAbout.css";
import logo from "../assets/logo.svg";

function PageAbout() {
  return (
    <section className="movie-container">
      <section className="logo-container-super">
        <img src={logo} alt="O.N.A² Films logo" className="logo" />
      </section>

      <div className="line"></div>
      
      <section className="about-container">
        
        <h1 className="H1-Intro">Introduction</h1>
        <p className="P-About">
          Welcome to O.N.A² Films, your gateway to an expansive world of storytelling. Our platform is dedicated to bringing you the most thrilling, dramatic, and unforgettable cinematic experiences.
        </p>
        <p className="P-About">
          Dive into our curated database of films, explore the stories behind the scenes, and find your next favorite movie. Whether you're a fan of crime dramas, heartwarming romances, or pulse-pounding thrillers, O.N.A² Films has something to captivate every viewer.
        </p>
        <h2 className="H2-Header">About this App</h2>
        <p className="P-About">
          O.N.A² Films app is a comprehensive film database tailored for movie enthusiasts who crave more than just watching films. Here, you can:
        </p>
        <p className="P-About">
          Discover Movies: Browse through an extensive collection of titles, from timeless classics to the latest releases.
        </p>
        <p className="P-About">
          Exclusive Content: Access interviews, trailers, and behind-the-scenes footage to delve deeper into the making of each film.
        </p>
        <p className="P-About">
          Connect and Share: Engage with other film fans, share your favorite picks, and stay updated on upcoming releases and industry news.
        </p>
      </section>
    </section>
  );
}

export default PageAbout;