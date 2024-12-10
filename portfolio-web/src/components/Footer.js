import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        py: 3,
        backgroundColor: "#0033a0",
        color: "white",
      }}
    >
      <Typography variant="body2">
        © 2024 Lance Henry. All rights reserved.
      </Typography>
      <Box sx={{ mt: 1 }}>
        <Link href="https://linkedin.com/in/lance-j-henry" color="inherit" underline="hover" target="_blank">
          LinkedIn
        </Link>{" "}
        |{" "}
        <Link href="https://github.com/bluebull7" color="inherit" underline="hover" target="_blank">
          GitHub
        </Link>{" "}
        |{" "}
        <Link href="mailto:lance.henryrei@gmail.com" color="inherit" underline="hover">
          Email
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
