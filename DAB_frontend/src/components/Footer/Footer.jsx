// npm modules
// import { Link } from 'react-router-dom'
// images
import logo from '../../assets/images/logo.png'
import { RiLinkedinFill } from 'react-icons/ri'
import { AiFillGithub } from 'react-icons/ai'
import { FaFacebookF } from "react-icons/fa";
// // data
import { quickLinks1, quickLinks2, quickLinks3 } from '../../assets/data/footerLinks'
import { Link } from 'react-router-dom'

const socialLinks = [
  {
    path: 'https://github.com/TuanNguyen0915',
    icon: <AiFillGithub className='group-hover:text-white w-4 h-5' />
  },
  {
    path: "https://facebook.com",
    icon: <FaFacebookF className='group-hover:text-white w-4 h-5' />
  },
  {
    path: "https://www.linkedin.com/in/tuan-nguyen0915/",
    icon: <RiLinkedinFill className='group-hover:text-white w-4 h-5' />
  }
]

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='pb-16 pt-10'>
      <div className="container flex md:flex-row flex-col-reverse justify-between">
        <div className='flex justify-between flex-col flex-wrap gap-[30px]'>
          <div className='flex flex-col justify-between items-center md:items-start mt-[20px]'>
            <img src={logo} alt="logo" />
            <p className='text-[16px] leading-7 font-[400] text-textColor '>CopyRight © {year} developed by Tuan Nguyen all right reversed.</p>
            {/* SOCIAL LINK */}
            <div className='flex items-center gap-3 mt-4'>
              {socialLinks.map((social, index) => (
                <Link to={social.path} key={index} className='w-9 h-9 flex justify-center items-center border-[1px] border-black rounded-full group hover:bg-primaryColor hover:border-none'>
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* QUICK LINK */}
        <div className='flex flex-col md:w-1/2 w-full md:ml-[20px]'>
          <h2
            className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor mt-4 text-center'>
              Quick Links
          </h2>
          <div className='flex justify-between items-center '>
            <ul className='flex flex-col'>
              {quickLinks1.map((link, index) => (
                <Link key={index} to={link.path}
                  className={`${index !== quickLinks1.length - 1 ? 'mb-[10px]' : ''} hover:text-primaryColor`}
                >
                  {link.display}
                </Link>
              ))}
            </ul>
            <ul className='flex flex-col'>
              {quickLinks2.map((link, index) => (
                <Link key={index} to={link.path}
                  className={`${index !== quickLinks1.length - 1 ? 'mb-[10px]' : ''} hover:text-primaryColor`}
                >
                  {link.display}
                </Link>
              ))}
            </ul>
            <ul className='flex flex-col'>
              {quickLinks3.map((link, index) => (
                <Link key={index} to={link.path}
                  className={`${index !== quickLinks1.length - 1 ? 'mb-[10px]' : ''} hover:text-primaryColor`}
                >
                  {link.display}
                </Link>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer