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

  const publicNavLinks = [
    { label: "Our story" },
    { label: "Membership" },
    { label: "Write" },
    { label: "Sign in" },
  ];

  const userActions = [
    { icon: <FiBell /> },
    { icon: <PiNotepad /> },
  ];

  return (
    <div className="navigation">

      <div className="top-nav">

        <div className="left-section">
          {isLoggedIn && (
            <IoMenu
              className="hamburger-menu"
              onClick={() => {
                setShowSidebar(!showSidebar);
                setShowMenu(false);
              }}
            />
          )}
          <h1 className="logo">Medium</h1>
        </div>

        {isLoggedIn && (
          <div className="nav-center">
            <IconInput placeholder="Search" />
          </div>
        )}

        <div className="nav-right">
          {isLoggedIn ? (
            <>
              <button className="get-app">
                <RiAppsLine />
                Get app
              </button>

              {userActions.map((action, index) => (
                <span key={index} className="nav-icon">
                  {action.icon}
                </span>
              ))}

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

              {publicNavLinks.map((item, index) => (
                <p key={index} className="nav-link">
                  {item.label}
                </p>
              ))}

              <button className="get-started">Get started</button>
            </>
          )}
        </div>

      </div>

      {isLoggedIn && (
        <Sidebar
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
      )}
    </div>
  );
};