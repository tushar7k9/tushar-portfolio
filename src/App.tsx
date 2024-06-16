import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css'
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { useState } from "react";

const App = () => {

  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(0);
  const [isHome, setIsHome] = useState(false);

  return (
    <main className='bg-slate-300/20'>
      <Router>
        <NavBar isHome={isHome} isThemeOpen={isThemeOpen} setIsThemeOpen={setIsThemeOpen}/>
        <Routes>
          <Route path='/' element={<Home isThemeOpen={isThemeOpen} setIsThemeOpen={setIsThemeOpen} selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme} isHome={isHome} setIsHome={setIsHome}/>} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About setIsHome={setIsHome}/>} />
                  <Route path='/projects' element={<Projects setIsHome={setIsHome}/>} />
                  <Route path='/contact' element={<Contact setIsHome={setIsHome}/>} />
                </Routes>
                {/* <Footer /> */}
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  )
}

export default App
