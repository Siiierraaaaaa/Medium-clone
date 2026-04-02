import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import "./dropdown.css";

export const Dropdown = ({ handleLogout }) => {

    const topItems = [
        { label: "John Doe", isUsername: true },
        { label: "View Profile", path: "/profile", isLink: true },
    ];

    const middleItems = [
        { label: "Settings", icon: <IoSettingsOutline /> },
        { label: "Help", icon: <IoIosHelpCircleOutline /> },
    ];

    return (
        <div className="dropdown-menu">

            <div className="dropdown-top">
                {topItems.map((item, index) =>
                    item.isUsername ? (
                        <p key={index} className="username">
                            {item.label}
                        </p>
                    ) : (
                        <Link key={index} to={item.path}>
                            {item.label}
                        </Link>
                    )
                )}
            </div>

            <div className="dropdown-middle">
                {middleItems.map((item, index) => (
                    <p key={index}>
                        {item.icon}
                        {item.label}
                    </p>
                ))}
            </div>

            <hr />

            <button onClick={handleLogout}>
                Sign out
            </button>

        </div>
    );
};