import { useLocation, Link } from "react-router-dom";
import "./navigation.css";

const navList = [
    { link: '/', label: "Home" },
    { link: '/library', label: "Library" },
    { link: '/profile', label: "Profile" },
    { link: '/stories', label: "Stories" },
    { link: '/stats', label: "Stats" },
    { link: '/following', label: "Following" },
];

const NavigationButton = ({ link, label, isActive }) => {
    return (
        <Link
            to={link}
            style={{
                textDecoration: 'none',
                color: isActive ? 'white' : 'black'
            }}
        >
            {label}
        </Link>
    );
};

export const Navigation = () => {
    const { pathname } = useLocation();

    return (
<nav className="nav-container">
            <div className="nav-logo">Medium</div>

            <div className="nav-links">
                {navList.map((item) => (
                    <NavigationButton
                        key={item.label}
                        link={item.link}
                        label={item.label}
                        isActive={pathname === item.link}
                    />
                ))}
                <button className="nav-write">Write</button>
                <button className="nav-signin">Sign in</button>
            </div>
        </nav>
    );
};