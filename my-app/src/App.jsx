import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/home/Home'
// import About from './pages/about/About'
// import Gallery from './pages/gallery/Gallery'
// import Notfound from './pages/notfound/Notfound'
// import Contact from './pages/contact/Contact'
import Navbar from './components/Navbar'
const App = () => {
  return (
   <div>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        {/* <About/>
        <Contact/>
        <Gallery/>
        <Notfound/> */}
      </Routes>
      

   </div>
     
  

      
  )
}

export default App