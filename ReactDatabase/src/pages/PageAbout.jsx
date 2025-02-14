import "./PageAbout.css";
import logo from "../assets/logo.svg";

function PageAbout() {
  return (
    <main className="MovieContainer">

      <section className="LogoContainerLine">
        <img src={logo} alt="O.N.A² Films logo" className="LogoAbout" />
        <div className="DividerLine"></div>
      </section>

     
      <section className="AboutContainer">
        <article className="ArticleAbout1">
            <h1 className="H1-Intro">Introduction</h1>
            <p>Welcome to O.N.A² Films, your gateway to an expansive world of storytelling. Our platform is dedicated to bringing you the most thrilling, dramatic, and unforgettable cinematic experiences.</p>
            <p> Dive into our curated database of films, explore the stories behind the scenes, and find your next favorite movie. Whether you&apos;re a fan of crime dramas, heartwarming romances, or pulse-pounding thrillers, O.N.A² Films has something to captivate every viewer.</p>
        </article>

        <br/><br/><br/><br/>

        <article className="ArticleAbout2">
            <h2 className="H2-Intro">About this App</h2>
            <p>O.N.A² Films app is a comprehensive film database tailored for movie enthusiasts who crave more than just watching films. Here, you can:</p>
            <p><span className="HighlightAbout">Discover Movies:</span>&nbsp;Browse through an extensive collection of titles, from timeless classics to the latest releases.</p>
            <p><span className="HighlightAbout">Exclusive Content:</span>&nbsp;Access interviews, trailers, and behind-the-scenes footage to delve deeper into the making of each film.</p>
            <p><span className="HighlightAbout">Connect & Share:</span>&nbsp;Engage with other film fans, share your favorite picks, and stay updated on upcoming releases and industry news.</p>
        </article>
      </section>

      <br/><br/><br/><br/>
     
    </main>

    
  );
}

export default PageAbout;