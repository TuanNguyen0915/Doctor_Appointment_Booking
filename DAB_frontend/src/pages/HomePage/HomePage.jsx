// components
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import Home from "../../components/Home/Home"
import About from "../../components/About/About"
import Services from "../../components/Services/Services"


const HomePage = () => {
  return (
    <section>
      <NavBar />
      <Home />
      <About />
      <Services />
      <Footer />
    </section>
  )
}

export default HomePage