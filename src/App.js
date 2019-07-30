import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './sass/main.scss';

import Home from './components/pages/Home';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="container">
                    <Route path="/" component={Home} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
