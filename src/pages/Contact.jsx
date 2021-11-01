import { midMobile, tablet } from "../responsive";
import ContactContent from "../components/ContactContent";
import Header from "../components/Header";
import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Container>
      <Header />
      <ContactContent />
    </Container>
  );
};
const Container = styled.div`
  margin: 50px 10px;
`;
export default Contact;
