import React from 'react';
import Home from './page/Home';


import './styles/main.css';
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <>
            <div className='App'>
                <Home />
            </div>
            <ToastContainer/>
        </>
    );
}

export default App;
