import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/css/style.css";

import Home from "./components/Pages/Home/Home";

const App = () => {
    return (
        <Router>
     
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
        </Router>
    );
};

export default App;
