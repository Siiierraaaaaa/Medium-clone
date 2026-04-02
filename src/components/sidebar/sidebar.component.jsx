import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { PiBookmarksSimpleThin } from "react-icons/pi";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { BsPerson } from "react-icons/bs";
import { IoStatsChartOutline } from "react-icons/io5";
import { SlUserFollowing } from "react-icons/sl";
import "./sidebar.css";

export const Sidebar = ({ showSidebar, setShowSidebar }) => {

    if (!showSidebar) return null;

    return (
        <>
            <div
                className="overlay"
                onClick={() => setShowSidebar(false)}
            />

            {/* SIDEBAR */}
            <div className="sidebar">

                <div className="left-section">
                    <IoMenu onClick={() => setShowSidebar(false)} />
                    <h1 className="logo">Medium</h1>
                </div>

                <div className="sidebar-links">
                    <Link to="/" onClick={() => setShowSidebar(false)}>
                        <IoHomeOutline />
                        Home
                    </Link>

                    <Link to="/library" onClick={() => setShowSidebar(false)}>
                        <PiBookmarksSimpleThin />
                        Library
                    </Link>

                    <Link to="/profile" onClick={() => setShowSidebar(false)}>
                        <BsPerson />
                        Profile
                    </Link>

                    <Link to="/stories" onClick={() => setShowSidebar(false)}>
                        <HiOutlineNewspaper />
                        Stories
                    </Link>

                    <Link to="/stats" onClick={() => setShowSidebar(false)}>
                        <IoStatsChartOutline />
                        Stats
                    </Link>
                </div>

                <div style={{ flex: 1 }} />

                <div className="sidebar-bottom">
                    <Link to="/following">
                        <SlUserFollowing />
                        Following
                    </Link>

                    <p>UX Collective</p>
                    <p>uxplanet.org</p>
                </div>

            </div>
        </>
    );
};