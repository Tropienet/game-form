import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import GenrePage from "./GenrePage";
import GameForm from "./GameInfoForm";

const RouteSwitch = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path ="/" element={<App />} />
                <Route path="/Genre" element={<GenrePage />} />
                <Route path="/Gameform" element={<GameForm />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;