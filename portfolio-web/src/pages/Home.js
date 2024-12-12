import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ p: 5, textAlign: "center" }}>
      {/* Hero Section */}
      <Typography variant="h3" gutterBottom>
        Welcome to Lance Henry's Portfolio
      </Typography>
      <Typography variant="h6" sx={{ mb: 3 }}>
        Making Accounting Cool | Leadership | Technology
      </Typography>
      <Button variant="contained" color="primary" sx={{ mx: 1 }}>
        View Portfolio
      </Button>
      <Button variant="outlined" color="primary" sx={{ mx: 1 }}>
        Contact Me
      </Button>

      {/* Highlights Section */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Highlights
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary">
              💼 Deloitte Leadership Scholar
            </Typography>
            <Typography>
              Recognized for excellence in leadership and innovation in accounting.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary">
              🌟 HexaCode Developer
            </Typography>
            <Typography>
              Creator of a custom programming language and its interactive playground.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary">
              🚀 EY Internship Offer
            </Typography>
            <Typography>
              Summer 2025 internship in Technology Risk Assurance.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;
