import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Router, Link, Routes, Route } from 'react-router-dom'
import Demo from './components/Demo';
import './App.css';
import DisplayWallets from './components/DisplayWallets';

function App() { // functional component
  return (
    < >
      <BrowserRouter>
        <Link to="/">Home</Link> <br/>
        <Link to="/wallets">Wallets</Link><br/>
        <Link to="/about">About</Link><br/>
        <Link to="/demo">Demo</Link><br/>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path='/wallets' element={<DisplayWallets></DisplayWallets>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path='/demo' element={<Demo></Demo>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
