import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { FiBell } from "react-icons/fi";
import { PiNotepad } from "react-icons/pi";
import { RiAppsLine } from "react-icons/ri";
import { Sidebar } from "../sidebar/sidebar.component";
import { Dropdown } from "../drop-down/dropdown.component";
import "./navigation.css";

function IconInput({ placeholder }) {
    return (
        <div className="icon-input">
            <CiSearch />
            <input type="text" placeholder={placeholder} />
        </div>
    );
}

export const Navigation = ({ isLoggedIn, setIsLoggedIn }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setIsLoggedIn(false);
    };

    return (
        <div className="navigation">

            <div className="top-nav">

                {/* LEFT */}
                <div className="left-section">
                    {isLoggedIn && (
                        <IoMenu
                            className="hamburger-menu"
                            onClick={() => setShowSidebar(!showSidebar)}
                        />
                    )}
                    <h1 className="logo">Medium</h1>
                </div>

                {/* CENTER */}
                {isLoggedIn && (
                    <div className="nav-center">
                        <IconInput placeholder="Search" />
                    </div>
                )}

                {/* RIGHT */}
                <div className="nav-right">
                    {isLoggedIn ? (
                        <>
                            <button className="get-app">
                                <RiAppsLine />
                                Get app
                            </button>

                            <FiBell />
                            <PiNotepad />

                            <div className="profile-section">
                                <div
                                    className="profile-icon"
                                    onClick={() => setShowMenu(!showMenu)}
                                >
                                    <img src="/assets/profile.png" alt="profile" />
                                </div>

                                {showMenu && (
                                    <Dropdown handleLogout={handleLogout} />
                                )}
                            </div>
                        </>
                    ) : (
                        <>
                            <p>Our story</p>
                            <p>Membership</p>
                            <p>Write</p>
                            <p>Sign in</p>
                            <button className="get-started">Get started</button>
                        </>
                    )}
                </div>

            </div>

            {/* 🔥 SIDEBAR (YOU WERE MISSING THIS) */}
            {isLoggedIn && (
                <Sidebar
                    showSidebar={showSidebar}
                    setShowSidebar={setShowSidebar}
                />
            )}

        </div>
    )
};