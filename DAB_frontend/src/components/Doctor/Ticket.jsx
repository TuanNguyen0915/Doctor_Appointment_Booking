const SlidePanel = () => {
  return (
    <div
      className="shadow-panelShadow p-3 lg:p-5 rounded-md "
    >
      <div className="flex items-center justify-between">
        <p className="text_para mt-0 font-semibold">Office Visit</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor">$120</span>
      </div>
      <div className="mt-[30px]">
        <p className="text_para font-semibold text-headingColor">Available Time Slots:</p>
        <ul className="mt-3">
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">Sunday</p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">10:00 AM - 1:00 PM</p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">Monday</p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">2:15 PM - 3:30 PM</p>
          </li>
          <li className="flex items-center justify-between mb-2">
            <p className="text-[15px] leading-6 text-textColor font-semibold">Tuesday</p>
            <p className="text-[15px] leading-6 text-textColor font-semibold">3:00 PM - 6:00 PM</p>
          </li>
        </ul>
      </div>
      <button className="btn px-2 w-full rounded-lg">Book Appointment</button>
    </div>
  )
}

export default SlidePanel