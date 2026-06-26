import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/navbar.jsx";

import Footer from "./layouts/footer.jsx";
import About from "./components/home/aboutSection.jsx";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<div>Home</div>} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<div>Service</div>} />
                <Route path="/contact" element={<div>Contact</div>} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;