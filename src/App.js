import React from 'react'
import './App.css';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Provider} from './context'


function App() {
  return (
    <Provider>
      <Router>
        <Navbar/>
        <div className='container'>
          <Routes>
            <Route exact={true} path="/" element={<Index/>}/>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
