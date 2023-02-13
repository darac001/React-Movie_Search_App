
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import About from "./pages/About";
import SingleMovie from "./pages/SingleMovie";



function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="movie/:id" element={<SingleMovie />}></Route>      
      </Routes>
    </Router>
  );
}

export default App;
