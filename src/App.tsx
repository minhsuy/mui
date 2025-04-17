import "./App.css";
import { MovieContextProvider } from "./components/Contexts/MovieContext";
import { ThemeContextProvider } from "./components/Contexts/ThemeContext";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <MovieContextProvider>
        <ThemeContextProvider>
          <Navbar></Navbar>
          <Movies></Movies>
        </ThemeContextProvider>
      </MovieContextProvider>
    </div>
  );
}

export default App;
