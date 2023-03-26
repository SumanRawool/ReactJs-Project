import Footer from "./components/Footer";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <h1 id="topic">Header</h1>
      <p style={{ color: "black" }}>This is amazing course i am learning</p>
      <Footer />
    </div>
  );
};

export default Header;
