import React, { useState } from "react";

function KidRow({ kid, updateKid, deleteKid }){ 
    const [treatment, setTreatment] = useState(kid.treatment);
    const [code, setCode] = useState(kid.code);
    const [name, setName] = useState(kid.name);
    const [rate, setRate] = useState(kid.rate);
    const [birth, setBirth] = useState(kid.birth);
    const [parent, setParent] = useState(kid.parent);
    const [note, setNote] = useState(kid.note);
    const [photo, setPhoto] = useState(kid.photo);

    const [isReadOnly, setReadOnly] = useState(true);
    
    return(
      <tr id="rows" class="tr" padding="checkbox">
        <td>
          <input type="checkbox" />
        </td>
        <td class="fit-content">{kid.id}</td>

        <td>
          <input
            id="treatment"
            class="input"
            type="text"
            defaultValue={treatment}
            onChange={(e) => setTreatment(e.target.value)}
            readOnly={isReadOnly}
          />
        </td>
        <td>
          <input
            id="code"
            class="input"
            type="text"
            defaultValue={code}
            onChange={(e) => setCode(e.target.value)}
            readOnly={isReadOnly}
          />
        </td>

        <td>
          <input
            id="name"
            class="input"
            type="text"
            defaultValue={name}
            onChange={(e) => setName(e.target.value)}
            readOnly={isReadOnly}
          />
        </td>

        <td>
          <input
            id="rate"
            class="input"
            type="text"
            defaultValue={rate}
            onChange={(e) => setRate(e.target.value)}
            readOnly={isReadOnly}
          />
        </td>

        <td>
          <input
            id="birth"
            class="input"
            type="text"
            defaultValue={birth}
            onChange={(e) => setBirth(e.target.value)}
            readOnly={isReadOnly}
          />
        </td>

        <td>
          <input
            id="parent"
            class="input"
            type="text"
            defaultValue={parent}
            onChange={(e) => setParent(e.target.value)}
            readOnly={isReadOnly}
          />
        </td>

        <td>
          <input
            id="note"
            class="input"
            type="text"
            defaultValue={note}
            onChange={(e) => setNote(e.target.value)}
            readOnly={isReadOnly}
          />
        </td>

        <td>
          <input
            id="photo"
            class="input"
            type="text"
            defaultValue={photo}
            onChange={(e) => setPhoto(e.target.files[0])}
            readOnly={isReadOnly}
          />
          
        </td>

        <td>
          <button
            class="btn btn-sm btn-success d-inline-block mr-1"
            onClick={(e) => {
              e.preventDefault(); 
              setReadOnly(false);
            }}
          >
            <i class="fas fa-edit"></i>
          </button>
          <button
            class="btn btn-sm btn-success d-inline-block mr-1"
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
            <i class="fas fa-save"></i>
          </button>
          <button
            class="btn btn-sm btn-danger d-inline-block"
            onClick={(e) => {
              e.preventDefault();
              deleteKid(kid.id);
            }}
          >
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    )
}

export default KidRow;