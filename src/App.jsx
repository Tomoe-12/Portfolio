import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero.jsx'
import Skills from './components/Skills/Skills.jsx'
function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Hero />
        <Skills/>
      </div>
    </>
  )
}

export default App
