import React, { Component } from 'react'
import './App.css';
import ClassComponent from './components/ClassComponent';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Index from './components/pages/Index';
import { BrowserRouter, Routes, Rout, Route } from "react-router-dom";
import NotFound from './components/pages/NotFound';

class App extends Component() {

  render() {
    return (
      <div className="App">

        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/about' element={<about />} />
            <Route path='/contact' element={<contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>

      </div>
    )
  }
}

export default App;
