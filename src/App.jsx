import React from 'react';
import './App.css';
import News from './components/News';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
  <div className='w-full'>
    <Navbar />

    <BrowserRouter>
      <Routes>
          <Route path='/' element={<News/>}/>
          <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
