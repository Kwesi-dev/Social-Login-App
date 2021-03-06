import './navbar.css' 
import { Link } from 'react-router-dom'

const Navbar = ({ user }) => {
    const handleLogout = ()=>{
        window.open("http://localhost:5000/auth/logout", "_self")
    }
    return (
        <div className="navbar">
            <Link to="/" className="link">
                <span className="logo">Kwesi App </span>
            </Link>
            { user ? (
                <ul className="list">
                <li className="listItem">
                    <img src={user.photos[0].value} alt="" className="avatar" />
                </li>
                <li className="listItem">{user.displayName}</li>
                <li className="listItem" onClick={handleLogout}>Logout</li>
            </ul>
            ):(
                <Link to="/login" className="link"><span>Login</span></Link>
            )}
        </div>
    )
}

export default Navbar
