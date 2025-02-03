import { useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    const pathname = location.pathname;
    return (
        <nav>
            <ul>
                <li><a href="/">Inicio</a></li>
                {pathname !== '/login' && <li><a href="/login">Login</a></li> }
            </ul>
        </nav>
    );
};
