"use client";

import React from "react";
import { Container, Typography, Box } from "@mui/material";
import Navbar from "@/Custom Components/Navbar/Desktop Nav/page";
import { BusinessHours } from "@/types/types";

const HomePage = () => {
  return (
    <div>
      <Container>
        <Typography variant="h1" gutterBottom>
          Home Page
        </Typography>
        <Box my={2}>
          <Typography variant="body1">This is the home page.</Typography>
        </Box>
      </Container>
    </div>
  );
};

export default HomePage;
