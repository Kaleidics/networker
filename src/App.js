import React from 'react';

import './sass/main.scss';

import Home from './components/pages/Home';
import Footer from './components/layout/Footer';

function App() {
    return (
            <div className="App">
                <div className="container">
                    <div className="hero"></div>
                    <Home />
                    {/* <Footer /> */}
                </div>
            </div>
    );
}

export default App;
