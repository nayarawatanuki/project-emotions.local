import React, { useState } from "react";

function ActivityRow({ activity, updateActivity, deleteActivity }){ 
    const [name, setName] = useState(activity.name);
    const [type, setType] = useState(activity.type);
    const [emotion, setEmotion] = useState(activity.emotion);
    
    const [isReadOnly, setReadOnly] = useState(true);
    
    return(
      <tr id="rows" className="tr" padding="checkbox">
        <td>
          <input type="checkbox" />
        </td>
        <td className="fit-content">{activity.id}</td>

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
            id="type"
            className="input"
            type="text"
            defaultValue={type}
            onChange={(e) => setType(e.target.value)}
            readOnly={isReadOnly}
          />
        </td>

        <td>
          <input
            id="emotion"
            className="input"
            type="text"
            defaultValue={emotion}
            onChange={(e) => setEmotion(e.target.value)}
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
              updateActivity({
                id: activity.id,
                name,
                type,
                emotion
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
              deleteActivity(activity.id);
            }}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    )
}

export default ActivityRow;