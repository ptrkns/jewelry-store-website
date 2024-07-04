import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar.tsx";
import Home from './Home.tsx';
import About from "./About.tsx";
import Footer from "./Footer.tsx";


function App() {
  return (
    <div className="App-Parent">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;