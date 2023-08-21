
import Navbar from '../src/components/Navbar'
import Landing from '../src/components/Landing'
import Broken from '../src/components/Broken'
import Footer from './components/Footer'
import '../src/styles/App.scss'

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Navbar />
      break
    case "/about":
      component = <About />
      break
    case "/impact":
      component = <Impact />
      break
    case "/contact":
      component = <Contact />
      break
    case "/broken":
      component = <Broken />
      break
  }


  return (
    <>
      <Navbar />
      <Landing />
      <Footer />
    </>
  )
}

export default App
