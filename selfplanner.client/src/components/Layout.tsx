import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar.tsx";
import '../styles/Layout.scss';

export const Layout = () => {
    return (
        <div className="Layout">
            <header className="layout-header">
                <Navbar />
            </header>
            <main className="layout-main">
                <Outlet />
            </main>
            <div className="layout-stats">
                <p>Stats</p>
            </div>
        </div>
    )
};