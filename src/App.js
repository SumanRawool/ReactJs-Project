import { element } from "prop-types";
import "./App.css";
import Header from "./components/Header";
import Movie from "./components/Movie";
import movies from "./movie.json";
function App() {
  let login = true;

  return (
    <div className="App">
      {(() => {
        if (login) {
          return <h1 style={{ color: "black" }}>Dekh le bhai</h1>;
        } else {
          return <h1 style={{ color: "black" }}>Dekh mat liyo</h1>;
        }
      })()}
      <Header />
      <div className="main">
        {movies.map((element, index) => {
          return (
            <Movie
              key={index}
              title={element.Title}
              year={element.Year}
              img={element.Poster}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
