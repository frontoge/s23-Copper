import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HouseIcon from '@mui/icons-material/House';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <BottomNavigation showLabels onChange={(event, newVal) => {
        //Redirect pages here based on the index of newVal
      }}>
        <BottomNavigationAction label="Home" icon={<HouseIcon />} />
        <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
        <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />

      </BottomNavigation>

      <Outlet />
    </>
  )
};

export default Layout;