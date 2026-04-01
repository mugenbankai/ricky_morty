import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CharacterDetail from "./pages/CharacterDetail";
import "./styles/App.css";

export default function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="nav-logo">
          🌌 Multivers Explorer
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </Router>
  );
}
