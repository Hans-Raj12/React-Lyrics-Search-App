import React from 'react'
import './App.css';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Lyrics from './components/tracks/Lyrics';
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
            <Route exact={true} path="/lyrics/track/:id" element={<Lyrics/>}/>
            {/* <Route path="/lyrics/track/:id" render={(props) => <Lyrics {...props} />} /> */}
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
