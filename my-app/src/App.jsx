import React from 'react'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Gallery from './pages/gallery/Gallery'
import Notfound from './pages/notfound/Notfound'
import Contact from './pages/contact/Contact'
const App = () => {
  return (
     <div>
      <Home/>
      <About/>
      <Contact/>
      <Gallery/>
      <Notfound/>
     </div>
  )
}

export default App