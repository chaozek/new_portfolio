import Header from "../components/Header";
import ITAContent from "../components/ITAContent";
import React from "react";
import styled from "styled-components";

const ITA = () => {
  return (
    <div>
      <Container>
        <Header />
        <ITAContent />
      </Container>
    </div>
  );
};
const Container = styled.div`
  margin: 50px 10px;
`;
export default ITA;
