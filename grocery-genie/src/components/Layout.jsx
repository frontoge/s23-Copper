import {AppBar, Toolbar, Tooltip} from "@mui/material";
import {Outlet, Link, useNavigate} from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import "../styles/Layout.css";
import Button from "@mui/material/Button";
import SettingsIcon from '@mui/icons-material/Settings';

function Layout(props) {
    let navigate = useNavigate();
    const routeChange = (path) => {
        navigate(path);
    }
  return (
    <>
      <AppBar color="primary" position={"sticky"}>
        <Toolbar>
            <Typography variant={"h6"} component={"div"} sx={{flexGrow: 1}}>
                Grocery Genie
            </Typography>
            <Link to="/household"><Button color={"primary"} onClick>Household Profile</Button></Link>
            <Link to="/recipes"><Button color={"primary"} onClick>Recipes</Button></Link>
            <Link to="/mealplan"><Button color={"primary"} onClick>Meal Plan</Button></Link>
            <Link to="/grocerylist"><Button color={"primary"} onClick>Grocery List</Button></Link>
            <Link to="/stores"><Button color={"primary"} onClick>Stores</Button></Link>
            <Tooltip title={"Account"}>
                <Link to={"/settings"}>
                    <IconButton>
                        <SettingsIcon color={"primary"}/>
                    </IconButton>
                </Link>
            </Tooltip>
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  )
};

export default Layout;