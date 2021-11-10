import React from 'react';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

import { Container, FileInfo, Preview } from "./styles";

const FileList = ({ file, onDelete }) => (
  <Container>
    {file.map(uploadedFile => (
      <li key={uploadedFile.id}>
        <FileInfo>
          <Preview src={uploadedFile.preview} />
          <div>
            <strong>{uploadedFile.name}</strong>
            <span>
              {uploadedFile.readableSize}{" "}
              <button onClick={() => onDelete(uploadedFile.id)}>
                Excluir
              </button>
            </span>
          </div>
        </FileInfo>
        <div>
          {!uploadedFile.uploaded && !uploadedFile.error && (
            <MdCheckCircle size={24} color="#78e5d5" />
          )}
          
          {uploadedFile.error && <MdError size={24} color="#e57878" />}

          {uploadedFile.url && (
            <a
              href={uploadedFile.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
            </a>
          )}
        </div>
      </li>
    ))}
  </Container>
);

export default FileList;