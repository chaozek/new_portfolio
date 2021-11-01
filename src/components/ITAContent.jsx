import { desktop, midMobile, tablet } from "../responsive";
import React from "react";
import ita from "../imgs/ita.png";
import styled from "styled-components";

const ITAContent = () => {
  return (
    <Container>
      <Header>IT ABSOLVENT</Header>
      <Text>
        This was unique offline/online course for React developers. I found this
        experience so important in my career because we&apos;ve been prepared
        for coorporate enviroment to join whole team smoothly. We had our
        supervisor who was mercilessly reviewing our pushed codes on gitlab. We
        had to go trough so challanging homeworks but I was one of five people
        who succesfully completed whole course. We started at 25 people. <br />
        <br />
        You can find deeper information on their websites
        <a href="https://www.it-absolvent.cz/" target="_blank" rel="noreferrer">
          {" "}
          IT-ABSOLVENT
        </a>{" "}
        &{" "}
        <a href="https://www.smartbrains.cz/" target="_blank" rel="noreferrer">
          SMART BRAINS
        </a>
        .
      </Text>
      <Project>
        <Left>
          <Image src={ita} />
        </Left>
        <Right>
          <TextHeader>
            Don&apos;t forget to check out ITA final project.
          </TextHeader>
          <Text>
            You can consider this website as my previous &quot;CV&quot; website.
            I didn&apos;t like the old school look so I&apos;ve desided to
            create this website on which you are currently on. Also check{" "}
            <a
              href="https://github.com/chaozek/portfolio"
              target="_blank"
              rel="noreferrer"
            >
              project description
            </a>
            .
          </Text>
          <Button>View Page</Button>
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
  font-size: 30px;
  font-weight: 400;
  margin-top: 40px;
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
export default ITAContent;
