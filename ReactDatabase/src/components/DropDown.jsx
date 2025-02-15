// import { Link } from "react-router-dom";
import "./DropDown.css";
import { Link } from "react-router-dom";

export default function SecondNav() {

    const handleScroll = (event) => {
        const value = event.target.value;
        const element = document.querySelector(`.${value}-container`);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

return (
    <section>
        <article className="dropdowns">
            <select onChange={handleScroll}>
                <option value="popular">Popular</option>
                <option value="top-rated">Top Rated</option>
                <option value="upcoming">Upcoming</option>
                <option value="now-playing">Now Playing</option>
            </select>
        </article>

        <div className="Header2">
            <div className="Nav2">
                <ul>
                    <li onClick={() => handleScroll({ target: { value: 'popular' } })}><Link to="#">Popular</Link></li>
                    <li onClick={() => handleScroll({ target: { value: 'top-rated' } })}><Link to="#">Top Rated</Link></li>
                    <li onClick={() => handleScroll({ target: { value: 'upcoming' } })}><Link to="#">Upcoming</Link></li>
                    <li onClick={() => handleScroll({ target: { value: 'now-playing' } })}><Link to="#">Now Playing</Link></li>
                </ul>
            </div>
        </div>
    </section>
);
}


            