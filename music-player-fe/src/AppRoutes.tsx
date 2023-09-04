import { Route, Routes } from "react-router-dom";
import App from "./App";
import MusicOverview from "./components/MusicOverview/MusicOverview";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<App />} />
                <Route path="/playlist/:playlistId" element={<MusicOverview />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes;