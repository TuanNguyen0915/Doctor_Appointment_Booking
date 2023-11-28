// components
import NavBar from "../../components/NavBar/NavBar"
import Footer from "../../components/Footer/Footer"
import Home from "../../components/Home/Home"
import About from "../../components/About/About"
import Services from "../../components/Services/Services"
import Feature from "../../components/Feature/Feature"
import Doctor from "../../components/Doctor/Doctor"
import Faq from "../../components/FAQ/FAQ"

const HomePage = () => {
  return (
    <section>
      <NavBar />
      <Home />
      <About />
      <Services />
      <Feature />
      <Doctor />
      <Faq />
      <Footer />
    </section>
  )
}

export default HomePage