import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoHomeOutline, IoStatsChartOutline } from "react-icons/io5";
import { PiBookmarksSimpleThin } from "react-icons/pi";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { BsPerson } from "react-icons/bs";
import { SlUserFollowing } from "react-icons/sl";
import "./sidebar.css";

export const Sidebar = ({ showSidebar, setShowSidebar }) => {

    if (!showSidebar) return null;


    const navLinks = [
        { label: "Home", path: "/", icon: <IoHomeOutline /> },
        { label: "Library", path: "/library", icon: <PiBookmarksSimpleThin /> },
        { label: "Profile", path: "/profile", icon: <BsPerson /> },
        { label: "Stories", path: "/stories", icon: <HiOutlineNewspaper /> },
        { label: "Stats", path: "/stats", icon: <IoStatsChartOutline /> },
    ];

    const bottomLinks = [
        { label: "Following", path: "/following", icon: <SlUserFollowing /> },
    ];

    return (
        <>
            <div
                className="overlay"
                onClick={() => setShowSidebar(false)}
            />

            <div className="sidebar">

                <div className="left-section">
                    <IoMenu onClick={() => setShowSidebar(false)} />
                    <h1 className="logo">Medium</h1>
                </div>

                <div className="sidebar-links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setShowSidebar(false)}
                        >
                            {link.icon}
                            <span>{link.label}</span>
                        </Link>
                    ))}
                </div>

                <div style={{ flex: 1 }} />

                <div className="sidebar-bottom">
                    {bottomLinks.map((link) => (
                        <Link key={link.path} to={link.path}>
                            {link.icon}
                            <span>{link.label}</span>
                        </Link>
                    ))}

                    <p>UX Collective</p>
                    <p>uxplanet.org</p>
                </div>

            </div>
        </>
    );
};