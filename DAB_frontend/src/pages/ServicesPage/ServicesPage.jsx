// components
import Services from '../../components/Services/Services'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

const ServicesPage = () => {
  return (
    <section>
        <NavBar />
      <div className="container">
        <Services />
        <Footer />
      </div>
    </section>
  )
}

export default ServicesPage