import React, { useState } from "react";

import FileList from '../../../components/PreviewKid';

function KidRow({ kid, updateKid, deleteKid }){ 

    const [photo, setPhoto] = useState(kid.file);
    const [treatment, setTreatment] = useState(kid.treatment);
    const [code, setCode] = useState(kid.code);
    const [name, setName] = useState(kid.name);
    const [rate, setRate] = useState(kid.rate);
    const [birth, setBirth] = useState(kid.birth);
    const [parent, setParent] = useState(kid.parent);
    const [note, setNote] = useState(kid.note);
    

    const [isReadOnly, setReadOnly] = useState(true);
    
    return(
      <tr id="rows" className="tr" padding="checkbox">
        <td>
          <input type="checkbox" />
        </td>
        <td className="fit-content">{kid.id}</td>

        <td>
          <FileList 
            file={photo}
            id='file'
            //onChange={(e) => setPhoto(e.target.files[0])}
            readOnly={isReadOnly}
          />  
        </td>

        <td>
          <input
            id="treatment"
            className="input"
            type="text"
            defaultValue={treatment}
            onChange={(e) => setTreatment(e.target.value)}
            readOnly={isReadOnly}
          />
        </td>
        <td>
          <input
            id="code"
            className="input"
            type="text"
            defaultValue={code}
            onChange={(e) => setCode(e.target.value)}
            readOnly={isReadOnly}
          />
        </td>

        <td>
          <input
            id="name"
            className="input"
            type="text"
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
            readOnly={isReadOnly}
          />
        </td>

        <td>
          <input
            id="rate"
            className="input"
            type="text"
            defaultValue={rate}
            onChange={(e) => setRate(e.target.value)}
            readOnly={isReadOnly}
          />
        </td>

        <td>
          <input
            id="birth"
            className="input"
            type="text"
            defaultValue={birth}
            onChange={(e) => setBirth(e.target.value)}
            readOnly={isReadOnly}
          />
        </td>

        <td>
          <input
            id="parent"
            className="input"
            type="text"
            defaultValue={parent}
            onChange={(e) => setParent(e.target.value)}
            readOnly={isReadOnly}
          />
        </td>

        <td>
          <input
            id="note"
            className="input"
            type="text"
            defaultValue={note}
            onChange={(e) => setNote(e.target.value)}
            readOnly={isReadOnly}
          />
        </td>

        <td>
          <button
            className="btn btn-sm btn-success d-inline-block mr-1"
            onClick={(e) => {
              e.preventDefault(); 
              setReadOnly(false);
            }}
          >
            <i className="fas fa-edit"></i>
          </button>
          <button
            className="btn btn-sm btn-success d-inline-block mr-1"
            onClick={(e) => {
              e.preventDefault();
              updateKid({
                id: kid.id,
                treatment,
                code,
                name,
                rate,
                birth,
                parent,
                note
              });
              setReadOnly(true);
            }}
          >
            <i className="fas fa-save"></i>
          </button>
          <button
            className="btn btn-sm btn-danger d-inline-block"
            onClick={(e) => {
              e.preventDefault();
              deleteKid(kid.id);
            }}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    )
}

export default KidRow;