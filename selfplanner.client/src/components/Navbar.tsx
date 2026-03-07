import '../styles/Navbar.scss';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="nav-brand">
                <p className="nav-logo">Planify</p>
            </div>
            <div className="nav-links">
                <NavLink to="/" className={({ isActive }) => isActive ? 'link active' : 'link'}>Home</NavLink>
                <NavLink to="/test" className={({ isActive }) => isActive ? 'link active' : 'link'}>Test Page</NavLink>
            </div>
        </nav>
    )
}