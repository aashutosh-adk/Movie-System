import "../css/Navbar.css"
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="navBar">
        <div className="nav-brand">
            <Link to="/">Movie App</Link>
        </div>
        <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/favorites" className="nav-link">Favorites</Link>
        </div>
    </div>
  )
}
export default NavBar;