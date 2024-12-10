import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import routes from "../routes";

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Lance Henry
        </Typography>
        {Object.values(routes).map((route) => (
          <Button key={route.path} color="inherit" component={Link} to={route.path}>
            {route.name}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
