import { Link } from "react-router-dom";
import { desktop, midMobile, mobile, tablet } from "../responsive";
import { useHistory } from "react-router-dom";
import Logo from "../imgs/logo.png";
import React from "react";
import styled from "styled-components";

const Header = () => {
  const history = useHistory();
  const route = history.location.pathname;
  return (
    <Container>
      <Left>
        <Link to="/">
          <Photo src={Logo} />
        </Link>
      </Left>
      <Right>
        <Name>Pavel Kaplan</Name>
        <Underline />
        <Links>
          <Ul>
            {route !== "/" && (
              <Link to="/">
                <Li>Home</Li>
              </Link>
            )}
            <Link to="/projects">
              <Li>React Projects</Li>
            </Link>

            <Link to="/ita">
              <Li>ITA absolvent</Li>
            </Link>
            <Link to="/contact">
              <Li>Contact</Li>
            </Link>
          </Ul>
        </Links>
      </Right>
    </Container>
  );
};

export default Header;

const Left = styled.div`
  flex: 1;
  align-items: flex-end;
  text-align: right;
  ${tablet({ textAlign: "left", paddingLeft: "20px" })}
`;
const Underline = styled.div`
  height: 6px;
  margin-top: 10px;
  width: 40px;
  border-radius: 20px;
  background-color: #f3425f;
  transition: all 300ms ease-in-out;
`;
const Photo = styled.img`
  border-radius: 50%;
  width: 100px;
  align-items: flex-end;
  border: 6px solid #f3425f;
`;
const Right = styled.div`
  flex: 3;
  padding-left: 20px;

  &:hover ${Underline} {
    width: 150px;
  }
`;

const Name = styled.h1`
  margin: 0;
  text-transform: uppercase;
  font-weight: 500;
`;
const Links = styled.div``;
const Ul = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: row;
  font-size: 20px;
  font-weight: bold;
  flex-wrap: wrap;
`;
const Li = styled.li`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  color: #5e5e5e;
  margin-right: 40px;
  cursor: pointer;
  letter-spacing: 1px;
  margin-top: 20px;
  transition: all 300ms ease-in-out;
  ${desktop({ width: "200px", marginTop: "30px", flex: "1" })}

  &:hover {
    color: #f3425f;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
`;
