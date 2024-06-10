import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero.jsx'
import Skills from './components/Skills/Skills.jsx'
import WorkExperience from './WorkExperience/WorkExperience.jsx'
function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Hero />
        <Skills />
        <WorkExperience />
      </div>
    </>
  )
}

export default App
