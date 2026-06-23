import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/navbar.jsx";

import Footer from "./layouts/footer.jsx";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" />
                <Route path="/about" />
                <Route path="/service" />
                <Route path="/contact" />
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;