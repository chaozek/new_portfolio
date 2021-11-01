import { Link } from "react-router-dom";
import { desktop, midMobile, tablet } from "../responsive";
import React from "react";
import me from "../imgs/me.png";
import styled from "styled-components";

const ContactContent = () => {
  return (
    <Container>
      <Header>CONTACT</Header>
      <Text>
        Currently I&apos;m working on more amazing projects and getter better
        everyday. Don&apos;t forget, you can test my skills if you wish to.
        I&apos;m gaining wide view over all technologies so I can easily adapt
        in your working enviroment.
      </Text>
      <Project>
        <Left>
          <Image src={me} />
        </Left>
        <Right>
          <TextHeader bold>Bc. Pavel Kaplan</TextHeader>
          <TextHeader>
            <a href="mailto:pkaplan1@seznam.cz">pkaplan1@seznam.cz</a>
          </TextHeader>
          <TextHeader>
            <a href="tel:735545288"> +420 735 545 288</a>
          </TextHeader>
          <Text>I can&apos;t wait to work with you!</Text>
        </Right>
      </Project>
    </Container>
  );
};
export const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  padding-left: 2%;
  border-radius: 5px;
  ${midMobile({ width: "100%", paddingLeft: "0%" })}
  ${tablet({ width: "90%", paddingLeft: "0%" })}
`;
const Header = styled.h2`
  font-size: 50px;
  font-weight: 300;
  margin-top: 40px;
`;
const Button = styled.button`
  background-color: #f3425f;
  border-radius: 100px;
  border: none;
  padding: 10px 20px;
  color: white;
  font-weight: bold;
  transition: all 0.35s ease;
  cursor: pointer;
  text-transform: uppercase;
  &:hover {
    background-color: white;
    border-radius: 100px;
    border: none;
    padding: 10px 20px;
    color: #f3425f;
    border: 2px solid #f3425f;
    transform: scale(1.1);
  }
`;
const TextHeader = styled.h2`
  font-size: 20px;
  font-weight: 400;
  font-weight: ${(props) => (props.bold ? "bold" : "")};
`;
const Text = styled.p`
  line-height: 30px;
`;
const Project = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 30px 0px;
`;
const Left = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  ${desktop({ width: "100%", flexBasis: "100%" })}
`;
const Right = styled.div`
  flex: 3;
  padding-left: 20px;
  ${desktop({ paddingLeft: "0", flexBasis: "100%" })}
`;
const Image = styled.img`
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 1px 5px rgb(0 0 0 / 3%), 0 5px 30px rgb(0 0 0 / 10%);
  transition: transform 0.35s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
export default ContactContent;
