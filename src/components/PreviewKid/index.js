import React from 'react';
import { MdLink } from 'react-icons/md';

import { Container, FileInfo, Preview } from "./styles";

const FileList = ({ file, onDelete }) => (
  <Container>
    <li>
        <FileInfo>
          <Preview src='' />
          <div>
            <span>
              <button onClick={() => onDelete(file.id)}>
                Excluir
              </button>
            </span>
          </div>
        </FileInfo>
        <div>
          <a
              href=" "
              target="_blank"
              rel="noopener noreferrer"
          >
              <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
          </a>
        </div>
      </li>
  </Container>
);

export default FileList;