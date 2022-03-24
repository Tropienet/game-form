import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import GameTypePage from "./GameTypePage";

const RouteSwitch = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path ="/" element={<App />} />
                <Route path="/Genre" element={<GameTypePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;