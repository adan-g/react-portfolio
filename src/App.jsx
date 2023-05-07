import Header from "./components/Header"
import About from './components/About'
import Skills from './components/Skills'
import MyWork from './components/MyWork'
import Contact from './components/Contact'
import MyName from "./components/MyName"
import Footer from "./components/Footer"


function App() {
  return (
    <div>
      
        <Header />
        <MyName />
        <About title='about me' id='about' />
        <Skills title='my coding journey' id='skills' />
        <MyWork title='my work' id='work' />
        <Contact title='Get in touch' id='contact' />
        <Footer />
      
    </div>
  )
}

export default App