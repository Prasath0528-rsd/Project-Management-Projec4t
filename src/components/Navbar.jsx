import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <h2>PROJECT MANAGEMENT TOOL</h2>
            <div>
                <Link to="/">LOGIN</Link>
                <Link to="/signup">SIGNUP</Link>
            </div>
        </div>
    )
}

export default Navbar
