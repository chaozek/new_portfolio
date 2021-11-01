import Header from "../components/Header";
import ProjectsContent from "../components/ProjectsContent";
import React from "react";
import styled from "styled-components";

const Projects = () => {
  return (
    <Container>
      <Header />
      <ProjectsContent />
    </Container>
  );
};
const Container = styled.div`
  margin: 50px 10px;
`;
export default Projects;
