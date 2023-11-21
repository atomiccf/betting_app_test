import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import React from "react";
import  "./Header.css";

const Header:React.FC = () =>{

    return (
        <div className="header_container">
            <Box sx={{ flexGrow: 1, width:"1440px" }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            href="/"
                        >
                            Betting App
                        </IconButton>
                    </Toolbar>
               </AppBar>
            </Box>
        </div>
    )
}


export default Header;


