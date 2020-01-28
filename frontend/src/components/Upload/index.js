import React from "react";

import Dropzone from "react-dropzone";
import { DropContainer, UploadMensage } from "./styles";

export default function Upload() {
  const renderDragMensage = (isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <UploadMensage>Arraste arquivo aqui...</UploadMensage>;
    }
    if (isDragReject) {
      return <UploadMensage type="error">Arraste não suportado</UploadMensage>;
    }

    return <UploadMensage type="success">Solte os arquivos </UploadMensage>;
  };

  return (
    <Dropzone accept="image/*" onDropAccepted={() => {}}>
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <DropContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
        >
          <input {...getInputProps()} />
          {renderDragMensage(isDragActive, isDragReject)}
        </DropContainer>
      )}
    </Dropzone>
  );
}
