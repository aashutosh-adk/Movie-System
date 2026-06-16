import "./css/App.css";
import Home from "./assets/pages/Home";
import MovieCard from "./components/MovieCard.jsx";
import { Routes, Route } from "react-router-dom";
import Favorites from "./assets/pages/Favorites.jsx";
import NavBar from "./components/NavBar.jsx";
import { MovieProvider } from "./context/MovieContext.jsx";

function App() {
  return (
    <MovieProvider>
    <NavBar />
      <main className="main-content">
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  </main>
  </MovieProvider>
  );
}
  
export default App;