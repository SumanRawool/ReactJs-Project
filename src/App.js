import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./components/Error";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />
          {/* About */}
          <Route path="/about" element={<About />} />
          {/* Contact */}
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
