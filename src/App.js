import React from 'react'
import { Route } from 'react-router-dom';
import './App.css';
import BlogAbout from './components/BlogAbout/Blog';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav'
import Menu from './components/Menu/Menu'
import Cart from './components/Cart/Cart'
import About from './components/About/About'
import Weddings from './components/Weddings/Weddings'
import Decorations from './components/Decorations/Decorations'

function App() {
  
  return (
      <div className="App">
        <Nav />
        <Route path='/home' component={Carousel} />
        <Route path='/home' component={BlogAbout} />
        <Route path='/menu' component={Menu} />
        <Route path='/cart' component={Cart} />
        <Route path='/about' component={About} />
        <Route path='/weddings' component={Weddings} />
        <Route path='/decorations' component={Decorations} />
        <Footer />
      </div>
  );
}

export default App;
