import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const HomePage = () => {
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        textAlign="center"
        bgcolor="background.paper"
        p={4}
        boxShadow={3}
        borderRadius={2}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to My Homepage
        </Typography>
        <Typography variant="h5" component="p">
          This is a simple homepage with some fancy text display using Material-UI.
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;