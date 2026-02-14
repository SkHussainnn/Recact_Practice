import Home from './Home.jsx';
import About from './About.jsx';
import Service from './Service.jsx';
import Contact from './Contact.jsx';
import NavScroll from './NavScroll.jsx'
import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom';
export default  function App() {

  return (
  <>
  <Router>
    <NavScroll />
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
       </Routes>
      </Router>
  </>
  )
}
