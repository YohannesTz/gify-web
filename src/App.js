import './App.css';
import Love from './components/Love';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Anime from './components/Anime';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/> 
        <Route path="love" element={<Love/>} />
        <Route path="Anime" element={<Anime/>} />
      </Routes> 
    </>
  );
}

export default App;
