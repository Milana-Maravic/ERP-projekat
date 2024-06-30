import React from "react";
import { Typography, Box, Container } from "@mui/material";
import { Transition } from "react-transition-group";

const duration = 500; // Animation duration in milliseconds

const defaultStyle = {
  transition: `transform ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out`,
  transform: "translateY(50px)",
  opacity: 0,
};

const transitionStyles: { [key: string]: any } = {
  entering: { transform: "translateY(50px)", opacity: 0 },
  entered: { transform: "translateY(0)", opacity: 1 },
};

const ContactPage: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      sx={{
        backgroundColor: "#f0f0f0", // Light gray background for contrast
        padding: "0 2rem",
      }}
    >
      <Transition in={true} timeout={duration} appear>
        {(state) => (
          <Box
            maxWidth={600}
            textAlign="center"
            style={{
              ...defaultStyle,
              ...transitionStyles[state],
            }}
            sx={{
              backgroundColor: "#ffffff", // White background for the contact box
              padding: "2rem",
              borderRadius: 12,
              boxShadow: "0 8px 16px rgba(0,0,0,0.2)", // Stronger shadow for a lifted effect
              border: "1px solid #ddd", // Subtle border for definition
              backdropFilter: "blur(5px)", // Adding a backdrop blur effect for modern design
            }}
          >
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "#333", // Dark text color for readability
                marginBottom: "1rem",
                fontSize: "2.5rem", // Larger font size for the header
                textTransform: "uppercase", // Uppercase text for emphasis
                letterSpacing: "0.05em", // Slightly increased letter spacing
                lineHeight: 1.2, // Line height for better readability
              }}
            >
              Kontaktirajte nas
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                color: "#666", // Medium gray text color for secondary information
                marginBottom: "1.5rem",
                fontSize: "1.125rem", // Slightly larger font size for the text
                lineHeight: 1.6, // Line height for better readability
              }}
            >
              Ako imate pitanja ili vam je potrebna podrška, slobodno nas
              kontaktirajte:
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                color: "#333",
                fontWeight: "bold",
                marginBottom: "0.75rem",
                fontSize: "1.125rem", // Larger font size for contact details
              }}
            >
              Email:{" "}
              <a href="mailto:info@climber.rs" style={{ color: "#007BFF", textDecoration: "none" }}>
                info@climber.rs
              </a>
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                color: "#333",
                fontWeight: "bold",
                marginBottom: "0.75rem",
                fontSize: "1.125rem",
              }}
            >
              Telefon:{" "}
              <a href="tel:+38166123123" style={{ color: "#007BFF", textDecoration: "none" }}>
                +381 66 123 123
              </a>
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                color: "#333",
                fontWeight: "bold",
                marginBottom: "0.75rem",
                fontSize: "1.125rem",
              }}
            >
              Adresa: Balzakova 1, Novi Sad
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "#333",
                marginBottom: "1.5rem",
                fontSize: "1.125rem",
              }}
            >
              Očekujemo vaše poruke i radujemo se saradnji!
            </Typography>
          </Box>
        )}
      </Transition>
    </Box>
  );
};

export default ContactPage;
