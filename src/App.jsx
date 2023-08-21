
import Navbar from '../components/Navbar'
import Landing from '../components/Landing'
import Broken from '../components/Broken'
import './App.scss'

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
    </>
  )
}

export default App
