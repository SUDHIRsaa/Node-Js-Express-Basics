import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';  
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom';

function App() {
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={authenticated ? <Navigate to="/Login" /> : <Home />} 
        />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
