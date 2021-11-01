import { midMobile, mobile, tablet } from "../responsive";
import React from "react";
import cat from "../imgs/cat.png";
import css from "../imgs/stacks/css.png";
import express from "../imgs/stacks/express.png";
import gf from "../imgs/gf.jpg";
import git from "../imgs/stacks/git.png";
import html from "../imgs/stacks/html.png";
import js from "../imgs/stacks/js.png";
import mern from "../imgs/stacks/mern.png";
import mongodb from "../imgs/stacks/mongodb.png";
import mongoose from "../imgs/stacks/mongoose.png";
import react from "../imgs/stacks/react.png";
import redux from "../imgs/stacks/redux.png";
import styled from "styled-components";
import styledcomponents from "../imgs/stacks/styledcomponents.png";
import toolkit from "../imgs/stacks/toolkit.png";
import ts from "../imgs/stacks/ts.png";
const HomeContent = () => {
  return (
    <Container>
      <Header>Hi! I&apos;m Pavel</Header>
      <Text>
        I&apos;m internet & self taught web developer from{" "}
        <strong> Czech Republic, Brno</strong>. I&apos;ve started studying in
        April 2020. Since then I&apos;ve done a lot of websites. I&apos;ve found
        wordpress limiting so dived deeper into the development & felt in love
        with <strong>React</strong>. Iam{"  "}
        <strong>
          successful graduate from{"  "}
          <a
            href="https://www.it-absolvent.cz/"
            target="_blank"
            rel="noreferrer"
          >
            IT-absolvent
          </a>
        </strong>{" "}
        where I&apos;ve gained team & company development experience.
      </Text>
      <Text>
        Currently I&apos;m looking for
        <strong> Frontend Developer Job</strong>.
      </Text>
      <Text>
        Dont forget to check out my projects. Iam learning & developing
        everyday, <strong> don&apos;t hesitate to message me </strong>if you are
        interested in my services, test my skills or want to discuss anything.
        <strong> I&apos;m looking forward!</strong>
      </Text>
      <Technologies>
        <Image src={react} />
        <Image src={styledcomponents} />
        <Image src={html} />
        <Image src={css} />
        <Image src={js} />
        <Image src={ts} />
        <Image src={git} />
        <Image src={toolkit} />
        <Image src={mongoose} />
        <Image src={mongodb} />
        <Image src={redux} />
        <Image src={mern} />
      </Technologies>
      <Text>
        Iam trying to focus on work life balance.
        <strong> How do I do it? I&apos;ve no idea.</strong> Is being developer
        time consuming, or hard? Yes, it is, but totally worth it. I want to be
        great lover, cat lover & web developer. There are no obsticles that can
        make me stop from making my dream come true.
      </Text>
      <Images>
        <TextImage src={gf} />
        <TextImage src={cat} />
      </Images>
      <Text>
        You can find me on{" "}
        <strong>
          <a
            href="https://www.facebook.com/pavelkaplan12"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </strong>
        ,{" "}
        <strong>
          <a
            href="https://www.linkedin.com/in/pavel-kaplan-75032b138/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </strong>
        ,{" "}
        <strong>
          <a href="https://github.com/chaozek" target="_blank" rel="noreferrer">
            Github
          </a>
        </strong>
        ,{" "}
        <strong>
          <a href="https://gitlab.com/chaozek" target="_blank" rel="noreferrer">
            Gitlab
          </a>
        </strong>{" "}
        ,{" "}
        <strong>
          <a href="https://vercel.com/chaozek" target="_blank" rel="noreferrer">
            Vercel
          </a>
        </strong>
        .
      </Text>
    </Container>
  );
};
export const Container = styled.div`
  width: 50%;
  margin: 0 auto;
  padding-left: 2%;
  border-radius: 5px;
  ${midMobile({ width: "100%", paddingLeft: "0%" })}
  ${tablet({ width: "90%", paddingLeft: "0%" })}
`;
const Header = styled.h2`
  font-size: 50px;
  font-weight: 300;
  margin: 20px 0px;
`;
const Text = styled.p`
  line-height: 30px;
`;
const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const TextImage = styled.img`
  flex: 1;
  width: 250px;
  margin: 20px;
  border-radius: 5px;
  box-shadow: 0 1px 5px rgb(0 0 0 / 3%), 0 5px 30px rgb(0 0 0 / 10%);
`;

const Technologies = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  column-gap: 10px;
  row-gap: 10px;
  margin: 2rem 0rem;
`;
const Image = styled.img`
  width: 100px;
  padding: 20px;
  margin: 5px;
  transition: all 300ms ease-in-out;

  &:hover {
    transform: scale(1.3);
  }
`;
export default HomeContent;
