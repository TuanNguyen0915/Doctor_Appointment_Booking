import useFetchData from "../../hooks/useFetchData"
import DoctorCard from "../../components/Doctor/DoctorCard"

const MyBooking = () => {
  const base_url = import.meta.env.VITE_BACK_END_SERVER_URL
  const { data: appointments, loading, error } = useFetchData(`${base_url}/users/appointments/my-appointments`)

  return (
    <div>
      {!loading && !error && <div className="grid grid-cols-1 lg:grid-cols-2 gap-5" >
        {appointments.map(doctor => (
          <DoctorCard doctor={doctor} key={doctor._id} />
        ))}
      </div>}

      {!loading && !error && appointments.length === 0 &&
        <h2 className="mt-5 text-center leading-7 text-[20px] text-primaryColor">
          You did not book any doctor yet
        </h2>}
    </div>
  )
}

export default MyBooking