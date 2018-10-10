import React, { Component } from "react";
import styled from "styled-components";
import Links from "./Links";

import backgroundImg from "./images/background.png";
import Logo from "./images/logo.png";

class App extends Component {
  render() {
    return (
      <BGImage>
        <LogoContainer>
          <img src={Logo} alt="logo" />
        </LogoContainer>
        <Links />
      </BGImage>
    );
  }
}

const BGImage = styled.div`
  background: url(${backgroundImg}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

const LogoContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 5%;
`;

export default App;
