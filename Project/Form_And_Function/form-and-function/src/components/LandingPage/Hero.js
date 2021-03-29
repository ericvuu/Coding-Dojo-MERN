import React from 'react';
import { useSpring, animated } from "react-spring";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import "@fontsource/roboto";

const Hero = () => {

  const props = useSpring({
    config: { duration: 5000 },
    to: async (next, cancel) => {
      await next({ opacity: 1, color: "black" });
    },
    from: { opacity: 0, color: "#ffaaee" },
  });

  const coloredText = {
    color: "#ffaaee",
  };

  return (
    <Grid container style={{ height: "70vh" }} alignItems="center" justify="center">
      <Box width="75%" paddingY={3}>
        <animated.div style={props}>
          <Typography variant="h3">
            Form & Function is a interior design agency in{" "}
            <span style={coloredText}>Los Angeles</span> and{" "}
            <span style={coloredText}>NYC</span>.
          </Typography>
        </animated.div>
      </Box>
    </Grid>
  );
}

export default Hero
