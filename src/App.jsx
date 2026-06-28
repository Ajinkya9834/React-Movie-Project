import './App.css';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";
import MovieDetails from './components/MovieDetails';
import Loginpage from './components/LoginPage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/login-page" element={<Loginpage/>}/>
      </Routes>    
  );
}

export default App;