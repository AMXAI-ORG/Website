import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./layouts/footer.jsx";

function App() {
    return (
        <Router>

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