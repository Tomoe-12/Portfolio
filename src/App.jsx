import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero.jsx'
import Skills from './components/Skills/Skills.jsx'
import WorkExperience from './components/WorkExperience/WorkExperience.jsx'
import ContactMe from './components/ContactMe/ContactMe.jsx'
import Footer from './components/Footer/Footer.jsx'
function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Hero />
        <Skills />
        <WorkExperience />
        <ContactMe />
      </div>
      <Footer />
    </>
  )
}

export default App
