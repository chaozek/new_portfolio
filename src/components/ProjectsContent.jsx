import { Link } from "react-router-dom";
import { desktop, midMobile, tablet } from "../responsive";
import React from "react";
import adp from "../imgs/adp.png";
import plus from "../imgs/plus.png";
import styled from "styled-components";
import toprecipes from "../imgs/toprecipes.png";

const ProjectsContent = () => {
  return (
    <Container>
      <Header>PROJECTS</Header>
      <Text>
        Currently I&apos;m working on more amazing projects and getter better
        everyday. Don&apos;t forget, you can test my skills if you wish to.
        I&apos;m gaining wide view over all technologies so I can easily adapt
        in your working enviroment.
      </Text>

      <Text>
        <strong>
          You can see there is not much to show. I&apos;m trying to keep this
          page recent as possible. Currently I&apos;m doing some updates with
          more skills. Don&apos;t hasitate to message me so I can send you what
          you wish. For now, please, check out
          <Link to="/ita"> ITA absolvent</Link> page.
        </strong>
      </Text>
      <Project>
        <Left>
          <Image src={toprecipes} />
        </Left>
        <Right>
          <TextHeader>Recipe App</TextHeader>
          <Text>
            This <strong>full stack MERN CRUD app </strong> was build with
            technologies as:{" "}
            <strong>
              Redux ToolKit, MongoDB, Express, NodeJS, Firebase...
            </strong>
            . Backend server & frontend is deployed via Vercel.
          </Text>
          <Text>(still working on it!)</Text>
          <a
            href="https://toprecepty.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Button>Visit Page</Button>
          </a>
        </Right>
      </Project>
      <Project>
        <Left>
          <Image src={plus} />
        </Left>
        <Right>
          <TextHeader>This can be your project.</TextHeader>
          <Text>I can&apos;t wait to work with you!</Text>
          <Link to="/contact">
            <Button>Contact page</Button>
          </Link>
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
export default ProjectsContent;
