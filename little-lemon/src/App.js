import React from 'react';
import  Nav  from './components/Nav';
import  Main  from './components/Main';
import  Footer  from './components/Footer';
import  BookingPage  from './components/BookingPage';
import './mycss/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
    return (
        <Router>
            <div className="container-fluid d-flex flex-column h-100">
                <div className="row justify-content-between">
                    <div className="col-12">
                        <Nav />
                    </div>
                </div>
                <div className="row flex-grow-1">
                    <div className="col-12 align-self-center">
                        <Routes>
                            <Route path="/main" element={<Main />} />
                            <Route path="/reservations" element={<BookingPage />} />
                        </Routes>
                    </div>
                    <div className="col-12 align-self-end">
                        <Footer/>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
