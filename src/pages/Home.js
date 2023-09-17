import { Box, Container, List, ListItem, Typography } from "@mui/material";
import React from "react";
import "../styles/Home.css";
import { LinkedIn, Instagram, Facebook } from "@mui/icons-material";
function Home() {
  return (
    <Container maxWidth={false} disableGutters>
      {/* About section */}
      <Box className="about">
        <Typography variant="h2">Hi, my name is Parsa.</Typography>
        <Box className="about-sub">
          <Typography variant="h5">I'm a full-stack web developer.</Typography>
          <LinkedIn />
          <Instagram />
          <Facebook />
        </Box>
      </Box>
      {/* Skills section */}
      <Box className="skills">
        <Typography variant="h1">Skills</Typography>
        <Box
          display="flex"
          flexDirection='column'
          justifyContent="space-evenly"
          alignItems="center"
          textAlign="center"
          className="list"
        >
          <Typography align="center" variant="h3">
            Frontend
          </Typography>
          <Typography align="center" variant="body1">
            ReactJS, Angular, Redux, HTML, CSS,
          </Typography>
          <Typography align="center" variant="h3">
            Backend
          </Typography>
          <Typography align="center" variant="body1">
            NodeJS, Java Spring, .NET, ExpressJS, GraphQL,
          </Typography>
          <Typography align="center" variant="h3">
            Languages
          </Typography>
          <Typography align="center" variant="body1">
            JavaScript, Java, Python, C#, C, C++, TypeScript, Go
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
