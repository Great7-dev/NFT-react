import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landingpage from './pages/landingpage';
import Modal from './components/Modal/modal';

function App() {
  return (
    <div className="App">
            <Router>
        <Routes>
          <Route path="/" element={<Landingpage/>} />
          <Route path="/modal" element={<Modal/>} />
        </Routes>
      </Router>  
    </div>
  );
}

export default App;
