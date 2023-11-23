import Header from "./components/Header"
import About from './components/About'
import Skills from './components/Skills'
import MyWork from './components/MyWork'
import Contact from './components/Contact'
import MyName from "./components/MyName"
import Footer from "./components/Footer"
import Aos from 'aos'
import 'aos/dist/aos.css'


Aos.init();

function App() {
  return (
    <div>
        <Header />
        <About />
        <Skills />
        <MyWork />
        <Contact />
        <Footer />
        {/*<MyName />
        <MyWork title='my work' id='work' />
        <Contact title='Get in touch' id='contact' />
        <Footer />*/}
    </div>
  )
}

export default App