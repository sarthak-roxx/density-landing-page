import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import NavbarTemp from './components/NavbarTemp';
import Home from './pages/Home';
import Footer from './components/Footer';
import NewNav from './components/NewNav';
// import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NewNav />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
