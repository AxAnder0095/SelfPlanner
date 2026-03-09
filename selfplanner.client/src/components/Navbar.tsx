import '../styles/Navbar.scss';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className="nav-content">
                <p className="nav-logo">Taskly</p>
                <div className="nav-links">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'link active' : 'link'}>Overview</NavLink>
                    <NavLink to="/priority" className={({ isActive }) => isActive ? 'link active' : 'link'}>High Priority</NavLink>
                    <NavLink to="/ongoing" className={({ isActive }) => isActive ? 'link active' : 'link'}>Ongoing</NavLink>
                    <NavLink to="/finished" className={({ isActive }) => isActive ? 'link active' : 'link'}>Finished</NavLink>
                    <NavLink to="/test" className={({ isActive }) => isActive ? 'link active' : 'link'}>Test Page</NavLink>
                </div>
            </div>
            <div className='nav-logout'>
                <button className='logout-button'>logout</button>
            </div>
        </nav>
    )
}