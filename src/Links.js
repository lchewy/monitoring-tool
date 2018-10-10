import React from "react";
import styled from "styled-components";

const Links = () => {
  return (
    <LinksOuterContainer>
      <Header>API PLUS MONITORING TOOL</Header>

      <GeneralLink
        href="https://api-plus-admin.dev.denali-sr.com/"
        target="_new"
      >
        <LinkSpan>API PLUS</LinkSpan>
      </GeneralLink>

      <GeneralLink href="https://mocapai.com" target="_new">
        <LinkSpan>MOCAP AI</LinkSpan>
      </GeneralLink>

      <GeneralLink
        href="https://galaxy.dev.denali-sr.com/v2/2018/10/09"
        target="_new"
      >
        <LinkSpan>GALAXY</LinkSpan>
      </GeneralLink>
    </LinksOuterContainer>
  );
};

const LinksOuterContainer = styled.div`
  width: 30%;
  background-color: #e7e7e9;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  font-family: Helvetica;
  box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const LinkSpan = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    background-color: red;
  }
  ${GeneralLink}: hover {
    color: white;
  }
`;

const Header = styled.h2`
  text-align: center;
`;

const GeneralLink = styled.a`
  text-decoration: none;
  color: red;
  display: block;
  overflow: auto;
  width: 100%;
  line-height: 5;
`;

export default Links;
