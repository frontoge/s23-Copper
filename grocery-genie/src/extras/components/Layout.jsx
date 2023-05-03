import {AppBar, Toolbar, Tooltip} from "@mui/material";
import {Outlet, Link, useNavigate} from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import "../styles/Layout.css";
import Button from "@mui/material/Button";
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Cookies from "universal-cookie"
import { useEffect, useState } from "react";

function Layout(props) {
  
  const [userData, setUserData] = useState({})

  const cookies = new Cookies();

  const navigate = useNavigate();

  useEffect(() =>{
    setUserData(cookies.get("login"))
  }, [])
  

  useEffect(() => {
    if (userData === undefined) {
      console.log("could not find user data", userData)
      navigate("/login", {replace: true})
    } else {
      console.log("Found something", userData);
    }
  }, [userData])


  return (
    <>
      <AppBar color="primary" position={"sticky"}>
        <Toolbar>
            <Typography variant={"h6"} component={"div"} sx={{flexGrow: 1}}>
                Grocery Genie
            </Typography>
            <Link to="/"><Button color={"primary"} onClick><HomeIcon color={"primary"} className={'navIcon'}/>Household Profile</Button></Link>
            <Link to="/recipes"><Button color={"primary"} onClick><MenuBookIcon color={"primary"} className={'navIcon'}/>Recipes</Button></Link>
            <Link to="/mealplan"><Button color={"primary"} onClick><CalendarMonthIcon color={"primary"} className={'navIcon'}/>Meal Plan</Button></Link>
            <Link to="/grocerylist"><Button color={"primary"} onClick><FormatListNumberedIcon color={"primary"} className={'navIcon'}/>Grocery List</Button></Link>
            <Link to="/stores"><Button color={"primary"} onClick><ShoppingBasketIcon color={"primary"} className={'navIcon'}/>Stores</Button></Link>
            <Tooltip title={"Settings"}>
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