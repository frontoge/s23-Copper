import {AppBar, BottomNavigation, BottomNavigationAction, Toolbar, Tooltip} from "@mui/material";
import {Outlet, Link, useNavigate} from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Layout = () => {
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }
  return (
    <>
      <AppBar color="primary" position={"fixed"} sx={{left: "0", width: "100%"}}>
        <Toolbar>
            <Tooltip title={"Menu"}>
                <IconButton
                    size="large"
                    edge={"start"}
                    color={"secondary"}
                    aria-label={"menu"}
                >
                    <MenuIcon />
                </IconButton>
            </Tooltip>
            <Typography variant={"h6"} component={"div"} sx={{flexGrow: 1}}>
                Grocery Genie
            </Typography>
            <Tooltip title={"Account"}>
                <IconButton>
                    <AccountCircleIcon color={"secondary"}/>
                </IconButton>
            </Tooltip>
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  )
};

export default Layout;