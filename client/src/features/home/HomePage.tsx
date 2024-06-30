import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
      padding={2}
      sx={{
        backgroundColor: '#f0f4f8',
        padding: { xs: '2rem', sm: '3rem', md: '4rem' },
        overflow: 'hidden',
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          color: "#1f2a38",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
          marginBottom: { xs: 5, sm: 7, md: 10 },
          fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.6rem' },
          letterSpacing: "0.1em",
          lineHeight: 1.4,
          zIndex: 1,
          fontFamily: '"Poppins", sans-serif',
        }}
      >
        Dobrodošli u prodavnicu Climber
      </Typography>
      <Link to="/catalog" style={{ textDecoration: 'none' }}>
        <Paper
          elevation={10}
          sx={{
            width: { xs: '80%', sm: 480 },
            maxWidth: 720,
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
            backgroundColor: "#ffffff",
            transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)',
            },
          }}
        >
          <img
            src="home.jpg"
            alt="Welcome"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: 16,
              objectFit: 'cover',
              transition: 'opacity 0.3s ease-in-out',
              opacity: 0.9,
              cursor: 'pointer',
            }}
          />
        </Paper>
      </Link>
      <Typography
        variant="body1"
        sx={{
          marginTop: 5,
          color: "#2c3e50",
          fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.4rem' },
          maxWidth: 720,
          lineHeight: 1.6,
          padding: { xs: '1rem', sm: '1.5rem', md: '2rem' },
          zIndex: 1,
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: 12,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          textAlign: 'center',
          fontFamily: '"Poppins", sans-serif',
        }}
      >
        Otkrijte najnoviju opremu za planinarenje, savete za avanture i još mnogo toga. Pridružite se našoj zajednici planinara i istražite prirodu kao nikada pre!
      </Typography>
    </Box>
  );
}
