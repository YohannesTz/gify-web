import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Greetings from './components/Greetings';
import Feelings from './components/Feelings';
import Couples from './components/Couples';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/> 
        <Route path="greetings" element={<Greetings/>} />
        <Route path="feelings" element={<Feelings/>} />
        <Route path="couples" element={<Couples/>} />
      </Routes> 
    </>
  );
}

export default App;
