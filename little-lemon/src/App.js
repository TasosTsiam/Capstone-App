import React from 'react';
import  Header  from './components/Header';
import  Nav  from './components/Nav';
import  Main  from './components/Main';
import  Footer  from './components/Footer';
import './mycss/style.css';


function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Header />
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12">
            <Nav />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Main/>
          </div>
          <div className="col-12">
            <Footer/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
