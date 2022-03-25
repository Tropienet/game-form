import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import GenrePage from "./GenrePage";

const RouteSwitch = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path ="/" element={<App />} />
                <Route path="/Genre" element={<GenrePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;