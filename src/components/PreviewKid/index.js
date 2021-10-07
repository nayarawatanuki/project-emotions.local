import React from 'react';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

import { Container, FileInfo, Preview } from './styles';

const FileList = ({ file }) => (
    <Container>
        {file.map(uploadedFile => (
            <li>
                <FileInfo>
                    <Preview src={uploadedFile.preview}/>
                    <div>
                        <strong>{uploadedFile.name}</strong>
                        <span>
                            {uploadedFile.readableSize}{" "}
                            { !!uploadedFile.url && (
                                <button onClick={() => {}}>Excluir</button>
                            )}
                        </span>
                    </div>                
                </FileInfo>

                <div>
                    
                    {uploadedFile.url && (
                        <a href="# "
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
                        </a>
                    )}

                    { uploadedFile.uploaded && <MdCheckCircle size={24} color="#78e5d5" />}
                    { uploadedFile.error && <MdError size={24} color="#e57878" /> }
                    
                </div>
            </li>
        ))}
    </Container>
);

export default FileList;