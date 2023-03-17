import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HouseIcon from '@mui/icons-material/House';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import {Outlet, Link, useNavigate} from "react-router-dom";

const Layout = () => {
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }
  return (
    <>
      <BottomNavigation showLabels onChange={(event, newVal) => {
          switch (newVal) {
              case 0:
                  routeChange("/login")
                  break;
              case 1:
                  routeChange("/");
                  break;
              case 2:
                  routeChange("/settings");
                  break;
              default:
                  break;

          }
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