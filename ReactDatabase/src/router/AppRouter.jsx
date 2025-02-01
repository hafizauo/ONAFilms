import { BrowserRouter, Routes, Route } from "react-router-dom;"
import PageHome from "../pages/PageHome";
import PageAbout from "../pages/PageAbout";
import PageFavourites from "../pages/PageFav";
import PageMovie from "../pages/PageMovie";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageHome />} />
                <Route path="/favourites" element={<PageFavourites />} />
                <Route path="/about" element={<PageAbout />} />
                <Route path="/movie:id" element={<PageMovie />} />
            </Routes>
        
        </BrowserRouter>
    )
}


export default AppRouter