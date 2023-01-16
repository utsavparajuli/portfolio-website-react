import './App.css';
import { Routes, Route} from "react-router-dom";
import About from "./routes/about";
import Careers from "./routes/careers";
import Home from "./routes/home";
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
    </>
  );
}

export default App;
