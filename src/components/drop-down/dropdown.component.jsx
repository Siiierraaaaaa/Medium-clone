import { Link } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import "./dropdown.css";

export const Dropdown = ({ handleLogout }) => {
  return (
    <div className="dropdown-menu">

      <div className="dropdown-top">
        <p className="username">John Doe</p>
        <Link to="/profile">View Profile</Link>
      </div>

      <div className="dropdown-middle">
       
        <p>
            <IoSettingsOutline />
            Settings
        </p>
        <p>
            <IoIosHelpCircleOutline />
            Help
        </p>
      </div>

      <hr />

      <button onClick={handleLogout}>
        Sign out
      </button>
    </div>
  );
};