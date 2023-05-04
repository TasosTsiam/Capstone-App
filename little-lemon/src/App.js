import React from 'react';
import  Header  from './components/Header';
import  Nav  from './components/Nav';
import  Main  from './components/Main';
import  Footer  from './components/Footer';
import './mycss/style.css';

function App() {
  return (
    <>
      <div className="header_nav_container">
        <Header/>
        <Nav/>
      </div>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
