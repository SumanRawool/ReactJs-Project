import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Insta from "./components/Insta";
import Mail from "./components/Mail";
import UserDetails from "./components/UserDetails";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/app/:userId" element={<UserDetails />} />
          {/* About */}
          <Route path="/about" element={<About />} />
          {/* Contact */}
          <Route path="/contact" element={<Contact />}>
            <Route index element={<Insta />} />
            <Route index path="insta" element={<Insta />} />
            <Route path="mail" element={<Mail />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
