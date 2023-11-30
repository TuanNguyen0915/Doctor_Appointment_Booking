const TestimonialCard = ({patient}) => {
  return (
    <div className="h-[5rem] w-[5rem] bg-black mx-auto" >
      <h1 className="text-white">{patient.name}</h1>
    </div>
    )
}

export default TestimonialCard