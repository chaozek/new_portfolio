import { mobile } from "../responsive";
import React from "react";
import styled from "styled-components";

const ReadyNotification = () => {
  return <Container>READY FOR YOUR PROJECTS</Container>;
};
export const Container = styled.div`
  position: fixed;
  bottom: 1%;
  z-index: 10;
  right: 0.5%;
  color: white;
  padding: 10px;
  animation: "blinker 1s linear infinite";
  -moz-transition: all 0.5s ease-in-out;
  -webkit-transition: all 0.5s ease-in-out;
  -o-transition: all 0.5s ease-in-out;
  -ms-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  ${mobile({ bottom: ".1%" })}

  -moz-animation: blink normal 1.5s infinite ease-in-out;
  /* Firefox */
  -webkit-animation: blink normal 1.5s infinite ease-in-out;
  /* Webkit */
  -ms-animation: blink normal 1.5s infinite ease-in-out;
  /* IE */
  animation: blink normal 1.5s infinite ease-in-out;
  /* Opera */
  @keyframes blink {
    0% {
      background-color: rgba(11, 156, 49, 1);
    }
    50% {
      background-color: rgba(11, 156, 49, 0.7);
    }
    100% {
      background-color: rgba(11, 156, 49, 1);
    }
  }
  @-webkit-keyframes blink {
    0% {
      background-color: rgba(11, 156, 49, 1);
    }
    50% {
      background-color: rgba(11, 156, 49, 0.7);
    }
    100% {
      background-color: rgba(11, 156, 49, 1);
    }
  }
`;

export default ReadyNotification;
