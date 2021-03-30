import React from 'react';
import { useSpring, animated } from "react-spring";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import "@fontsource/roboto";

const Hero = () => {

  const fade = useSpring({
    config: { duration: 5000 },
    from: { opacity: 0, color: "#ffaaee" },
    to: { opacity: 1, color: "black" },
  });

  const coloredText = {
    color: "#ffaaee",
  };

  return (
    <Grid container style={{ height: "70vh" }} alignItems="center" justify="center">
      <Box width="75%" paddingY={3}>
        <animated.div style={fade}>
          <Typography variant="h3">
            Form & Function is a interior design agency in <span style={coloredText}>Los Angeles</span> and <span style={coloredText}>NYC</span>.
          </Typography>
        </animated.div>
      </Box>
    </Grid>
  );
}

export default Hero
