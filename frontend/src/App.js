import React from "react";

import GlobalStyle from "./styles/global";
import { Container, Content } from "./styles";

import Upload from "./components/Upload";

export default function src() {
  return (
    <Container>
      <Content>
        <Upload />
      </Content>

      <GlobalStyle />
    </Container>
  );
}
