import Login from './Login.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Service from './Service.jsx';
import Contact from './Contact.jsx';
import NavScroll from './NavScroll.jsx'
import API from './Api.jsx';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { useState } from "react";


//Protect component
function ProtectedRoute({isLoggedIn, children}) {
  return isLoggedIn ? children : <Navigate to="/" replace />
}

export default  function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
  <>
  <Router>
    <NavScroll />
      <Routes>
        <Route path='/' element={<Login setIsLoggedIn={setIsLoggedIn} />}/>
        <Route path='/home' element={<ProtectedRoute isLoggedIn={isLoggedIn}><Home /></ProtectedRoute>}/>
        <Route path='/about' element={<ProtectedRoute isLoggedIn={isLoggedIn}><About /></ProtectedRoute>}/>
        <Route path='/service' element={<ProtectedRoute isLoggedIn={isLoggedIn}><Service /></ProtectedRoute>}/>
        <Route path='/contact' element={<ProtectedRoute isLoggedIn={isLoggedIn}><Contact /></ProtectedRoute>}/>
        <Route path='/api' element={<ProtectedRoute isLoggedIn={isLoggedIn}><API /></ProtectedRoute>}/>
       </Routes>
      </Router>
  </>
  )
}
