import "./App.css";
import LandingPage from "./Pages/landing/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/landing/tabs/Home";
import About from "./Pages/landing/tabs/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
