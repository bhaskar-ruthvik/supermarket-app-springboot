import "./sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/admin" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span className="spanside">Dashboard</span>
          </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/customer" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span className="spanside">Customers</span>
            </li>
          </Link>
          <Link to="/manager" style={{ textDecoration: "none" }}>
          <li>
            <LocalShippingIcon className="icon" />
            <span className="spanside">Managers</span>
          </li>
          </Link>
            
            <Link to="/products">
            <li>
            <StoreIcon className="icon" />
              <span className="spanside">Products</span>
              </li>
            </Link>
              
            
          <li>
            <CreditCardIcon className="icon" />
            <span className="spanside">Orders</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
