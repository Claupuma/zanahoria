import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './public/Dashboard';
import Home from './public/Home';

import { useAuth } from "./ruteo/AuthContext"
import BarraRutasProtected from './ruteo/BarraRutasProtected';
import BarraRutasPublic from './ruteo/BarraRutasPublic';


function App() {
  const { user } = useAuth();
  return(
    <div style={{background:"Blue"}}>
      <Router>
        {user ? <BarraRutasProtected /> : <BarraRutasPublic/>}
      </Router>
    </div>
  );
}

  export default App;
