const DoctorAbout = ({ doctor }) => {
  return (
    <div>
      <div>
        <h3 className="flex items-center gap-2 text-[20px] leading-7 text-headingColor font-semibold">
          About of <span className="text-irisBlueColor font-bold text-[24px] leading-9">{doctor.name}</span>
        </h3>
        <p className="text_para text-justify">
          A doctor is a medical professional who has completed the necessary education and training to diagnose, treat, and prevent illnesses and injuries in individuals. They provide essential medical care, prescribe medication, perform surgeries, and offer preventative measures to help people maintain their health.
        </p>
      </div>
      {/* EDUCATION */}
      <div className="mt-12">
        <h3 className="flex items-center gap-2 text-[20px] leading-7 text-headingColor font-semibold">
          Education
        </h3>
        <ul className="pt-4 md:p-5">

          <li
            className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]"
          >
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">09/15, 2016</span>
              <p className="text-[16px] leading-6 font-medium text-textColor">PHD in Surgeon</p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Umass Boston, Boston
            </p>
          </li>

          <li
            className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]"
          >
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">09/15, 2010</span>
              <p className="text-[16px] leading-6 font-medium text-textColor">Bachelor in Surgeon</p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              BMC, NewYork
            </p>
          </li>
        </ul>
      </div>
      {/* EXP */}
      <div className="mt-4">
        <h3 className="flex  items-center gap-2 text-[20px] leading-7 text-headingColor font-semibold">
          Experience
        </h3>
        <ul className="mt-4 md:p-5 flex md:flex-row flex-col md:justify-between ">
          <li
            className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] bg-[#fff9ea] py-4 px-10"
          >
            <div>
              <span className="text-red-700 text-[15px] leading-6 font-semibold">09/15, 2016</span>
              <p className="text-[16px] leading-6 font-medium text-textColor">PHD in Surgeon</p>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                Umass Boston, Boston
              </p>
            </div>
          </li>

          <li
            className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px] bg-[#fff9ea] py-4 px-10"
          >
            <div>
              <span className="text-red-700 text-[15px] leading-6 font-semibold">09/15, 2010</span>
              <p className="text-[16px] leading-6 font-medium text-textColor">Bachelor in Surgeon</p>
              <p className="text-[14px] leading-5 font-medium text-textColor">
                BMC, NewYork
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DoctorAbout