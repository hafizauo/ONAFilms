import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";
import PageFavourites from "../pages/PageFav";
import PageMovie from "../pages/PageMovie";

function AppRouter() {
    return (
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<PageHome />} />
                    <Route path="/favourites" element={<PageFavourites />} />
                    <Route path="/about" element={<PageAbout />} />
                    <Route path="/movie/:id" element={<PageMovie />} />
                </Routes>
            <Footer/>
        </BrowserRouter>
    )
}


export default AppRouter