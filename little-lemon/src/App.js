import React from 'react';
import  Header  from './components/Header';
import  Nav  from './components/Nav';
import  Main  from './components/Main';
import  Footer  from './components/Footer';
import './mycss/style.css';


function App() {
  return (
    <div className="container-fluid d-flex flex-column h-100">
      <div className="row justify-content-between">
        <div className="col-12 col-sm-12 col-md-4 col-lg-5">
          <Header />
        </div>
        <div className="col-12 col-sm-12 col-md-1 col-lg-7">
          <Nav />
        </div>
      </div>
      <div className="row flex-grow-1">
        <div className="col-12 align-self-center">
          <Main/>
        </div>
        <div className="col-12 align-self-end">
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
