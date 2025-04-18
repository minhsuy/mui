import "./App.css";
import Display from "./components/Display";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar/Navbar";
import { AuthContextProvider } from "./Contexts/AuthContext";
import { MovieContextProvider } from "./Contexts/MovieContext";
import { ThemeContextProvider } from "./Contexts/ThemeContext";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <MovieContextProvider>
          <ThemeContextProvider>
            <Navbar></Navbar>
            <Movies></Movies>
          </ThemeContextProvider>
        </MovieContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
