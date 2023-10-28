import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/css/style.css";

import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/AboutPage";
import Contact from "./components/Pages/Contact/ContactPage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/NET" element={<NET />} />
                    <Route path="/GDK" element={<GDK />} />
                    <Route path="/MKV" element={<MKV />} /> */}
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default App;
