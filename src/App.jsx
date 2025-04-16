import './App.css'
import About from './Components/About';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import SocialLinks from './Components/SocialLinks';

function App() {

  return (
    <>
     <NavBar></NavBar>
      <Home></Home>
      <SocialLinks></SocialLinks>
      <About></About>
      <Projects></Projects>
      <Experience></Experience>
      <Contact></Contact>
    </>
  )
}

export default App;
