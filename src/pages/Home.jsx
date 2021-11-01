import { mobile } from "../responsive";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";
import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Header />
      <HomeContent />
    </Container>
  );
};

export default Home;
const Container = styled.div`
  margin: 50px 10px;
`;
