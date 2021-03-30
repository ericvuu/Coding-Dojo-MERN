import React from 'react'
import StylesInfo from "../components/WorkPage/StylesInfo";
import { Parallax } from "react-parallax";
import Container from "@material-ui/core/Container";

const Work = () => {
  return (
    <Container maxWidth="md">
      <Parallax>
        <StylesInfo />
      </Parallax>
    </Container>
  );
}

export default Work;
