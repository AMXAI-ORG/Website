import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/navbar.jsx";
import Footer from "./layouts/footer.jsx";

import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Service from "./pages/service.jsx";
import Contact from "./pages/contact.jsx";

function App() {
    return (
        <Router>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Service />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            <Footer />
        </Router>
    );
}

export default App
