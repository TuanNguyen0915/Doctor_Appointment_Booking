// data
import { services } from "../../assets/data/services"
// component
import ServiceCard from "./ServiceCard"


const Services = () => {
  return (
    <section>
      <div className="container lg:py-[100px] py-2">
        <div className="xl:w-[500px] mx-auto">
          <h2 className="heading text-center">
            Our medical services
          </h2>
          <p className="text_para text-center">World-class care for everyone. Our health System offers unmatched, expert health care.</p>
        </div>
      </div>
      <div>
      </div>

      {/* SERVICES LIST */}
      <div className="container"> 
        <div className="flex flex-1 flex-wrap lg:flex-row flex-col justify-around items-center py-[30px]">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services