import logo from '../../assets/images/logo.png'

const NavBar = () => {
  return (
    <nav className="navbar flex items-center">
       <div className="container">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div>
            <img src={logo} alt="logo" />
          </div>
          {/* navbar items */}
           
        </div>
       </div>
    </nav>
  )
}

export default NavBar