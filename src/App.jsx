import Navbar from "../src/components/Navbar";
import Landing from "../src/components/Landing";
import Broken from "../src/components/Broken";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Impact from "./pages/Impact";
import Programs from "./pages/Programs";
import "../src/styles/App.scss";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/about":
      component = <About />;
      break;
    case "/impact":
      component = <Impact />;
      break;
    case "/programs":
      component = <Programs />;
      break;
    case "/impact":
      component = <Impact />;
      break;
    case "/contact":
      component = <Contact />;
      break;
    case "/broken":
      component = <Broken />;
      break;
  }

  return (
    <>
      <Navbar />
      <Landing />
      <Footer />
    </>
  );
}

export default App;
