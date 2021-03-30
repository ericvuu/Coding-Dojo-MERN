import React from 'react'
import NavBar from "../components/LandingPage/NavBar";
import Hero from "../components/LandingPage/Hero";
import Container from "@material-ui/core/Container";
import { AppBar } from "@material-ui/core";
import { Parallax } from "react-parallax";

const LandingPage = () => {


  const appBarStyle = {
    position: "sticky",
    background: "transparent",
    boxShadow: "none",
  };

  return (
    <Container maxWidth="md">
      <AppBar style={appBarStyle}>
        <NavBar />
      </AppBar>

      <Parallax blur={10} strength={200}>
        <Hero />
      </Parallax>

    </Container>
  );
}

export default LandingPage;
