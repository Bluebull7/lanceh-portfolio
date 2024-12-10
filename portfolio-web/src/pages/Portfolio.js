import React from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from "@mui/material";

const projects = [
  {
    title: "Membership Management System",
    description:
      "A full-stack system integrating Flask, React, and Azure Cosmos DB with dynamic membership reporting.",
    image: "/assets/membership-system.jpg",
    link: "https://github.com/lancehenry/membership-management-system",
  },
  {
    title: "HexaCode Playground",
    description:
      "Interactive programming playground for HexaCode, featuring custom language features and tutorials.",
    image: "/assets/hexacode-playground.jpg",
    link: "https://hexacodeplayground.com",
  },
  {
    title: "Azure Storage Integration",
    description:
      "Blob Storage project for efficient data management in accounting workflows and applications.",
    image: "/assets/azure-storage.jpg",
    link: "https://github.com/lancehenry/azure-storage-project",
  },
];

const Portfolio = () => {
  return (
    <Box sx={{ p: 5 }}>
      <Typography variant="h3" gutterBottom textAlign="center">
        Portfolio
      </Typography>
      <Typography variant="h6" textAlign="center" sx={{ mb: 4 }}>
        Explore some of my featured projects.
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, margin: "auto" }}>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <Button
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                color="primary"
                sx={{ margin: 2 }}
              >
                View Project
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
