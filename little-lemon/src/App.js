import React from 'react';
import  Header  from './components/Header';
import  Nav  from './components/Nav';
import  Main  from './components/Main';
import  Footer  from './components/Footer';
import './mycss/style.css';

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-md-6">
            <Header />
          </div>
          <div className="col-lg-4 col-md-6">
            <Nav />
          </div>
        </div>
      </div>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
