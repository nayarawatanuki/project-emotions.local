import React, { useState, createContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { useKidContext } from "../../context/kidContext";

import { Preview } from './styles';

function KidList({ kid, updateKid, deleteKid }){ 

    const {setKid_id} = useKidContext();
    const [id, setId] = useState(kid.id)
    const [photo, setPhoto] = useState(kid.photo);
    const [treatment, setTreatment] = useState(kid.treatment);
    const [code, setCode] = useState(kid.code);
    const [name, setName] = useState(kid.name);
    const [rate, setRate] = useState(kid.rate);
    const [birth, setBirth] = useState(kid.birth);
    const [parent, setParent] = useState(kid.parent);
    const [note, setNote] = useState(kid.note);
    
    //const [id, setId] = useState(kid.id);
    const [isReadOnly, setReadOnly] = useState(true);
    
    return(
      <tr id="rows">
        <td>
          <Preview
            src={photo}
            id='photo'
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
          <Link to={{ pathname: "/addImgEmotion", search:`${kid.id}` }}>
            <button
              id="vincular"
              className="btn btn-sm btn-info d-inline-block mr-1"
              onClick={(e) => {
                setId(kid.id)
              }}
            >
              <i className="fas fa-plus"></i>
            </button>
          </Link>

          <Link to={{ pathname: "/Activities", search: `${kid.id}`}}>
            <button
              id="list"
              className="btn btn-sm btn-info d-inline-block mr-1"
              onClick={(e) => {
                setKid_id(`${kid.id}`)
              }}
            >
              <i className="fas fa-list"></i>
            </button>
          </Link>
        </td>
        <td>
          <button
            id="edit"
            className="btn btn-sm btn-info d-inline-block mr-1"
            onClick={(e) => {
              e.preventDefault(); 
              setReadOnly(false);
              document.getElementById("save").disabled = false;
            }}
          >
            <i className="fas fa-edit"></i>
          </button>
          <button
            id="save"
            disabled={true}
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
              document.getElementById("save").disabled = true;
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

export default KidList;