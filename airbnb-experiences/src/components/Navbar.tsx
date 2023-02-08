import airbnbLogo from "../assets/images/airbnb-logo.svg"

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={airbnbLogo} alt="Airbnb logo" className="nav-logo" />
        </nav>
    )
}

export default Navbar;