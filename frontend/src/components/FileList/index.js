import React from "react";

import { Container, FileInfom, Preview } from "./styles";

export default function FileList() {
  return (
    <Container>
      <li>
        <FileInfo>
          <Preview src="https://testesamuel.s3-sa-east-1.amazonaws.com/cfdde01c9ce0ab1572ca249920d13432-CAMISOLA%20EM%20MICROFIBRA%20COM%20RENDA%20VAZADA%20%E2%80%93%20ISABETE.gif" />
          <div>
            <strong>profile.png</strong>
            <span>
              64kb <button onClick={() => {}}>Excluir</button>
            </span>
          </div>
        </FileInfo>
      </li>
    </Container>
  );
}
