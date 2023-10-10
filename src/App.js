// 1. Import Area

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Blog from './pages/Blog';

//2. Define Area

function App(props) {
  console.log(props.myclr)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<Home myclr2 = {props.myclr} />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

//3. Export Area
//3.1 Default Export

export default App;
