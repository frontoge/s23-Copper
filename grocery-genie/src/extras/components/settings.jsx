import React from "react";
import {Button, Divider, MenuItem, MenuList, Paper} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import Switch from "@mui/material/Switch";

export function Settings() {
    return (
        <Paper
            elevation={3}
            sx={{
                position: "relative",
                display: "flex",
                width: "40%",
                height: "100%",
                alignContent: "center",
                left: "30%",
                marginTop: "1%"

            }}
        >
            <MenuList dense
                sx ={{
                    position: "relative",
                    width: "100%"
                }}
            >
                <MenuItem>
                    <ListItemText>Setting 1</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemText>Toggle Setting<Switch /></ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemText>Slider Setting</ListItemText>
                </MenuItem>
            </MenuList>
            <Button variant="contained">Save</Button>
        </Paper>
    )
}
