import {doctors} from '../../assets/data/doctors'
import DoctorCard from './DoctorCard'

const Doctor = () => {
  return (
    <section>
      <div className="container lg:mt-[10rem] mt-[5rem]">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Our great doctors</h2>
          <p className="text_para text-center">
          Certainly! Our exceptional doctors, with their unwavering commitment and expertise, stand as beacons of healing and hope. Their tireless efforts and compassionate care transform lives, making them true guardians of well-being.
          </p>
        </div>
        <div className="flex flex-1 flex-wrap lg:flex-row flex-col justify-around items-center py-[30px] w-full">
          {doctors.map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Doctor