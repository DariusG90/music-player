import { Route, Routes } from "react-router-dom";
import App from "./App";
import MusicOverview from "./components/MusicOverview/MusicOverview";
import Home from "./components/Home/Home";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<Home />} />
                <Route path="/playlist/:playlistId" element={<MusicOverview />} />
                <Route path="/album/:playlistId" element={<MusicOverview />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes;