import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import "./Navbar.scss";

function NavBar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <span>BLOCKBUSTER</span>
          <span>Home</span>
          <span>Series</span>
          <span>Popular</span>
          <span>My Lists</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>Profile</span>
          <Notifications className="icon" />
          <div className="profile">
            <ArrowDropDown className="icon" />
                <div className="options">
                    <span>Settings</span>
                    <span>Logout</span>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
