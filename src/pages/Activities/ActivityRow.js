import React, { useState } from "react";

function ActivityRow({ activity, updateActivity, deleteActivity }){ 
    const [name, setName] = useState(activity.name);
    const [type, setType] = useState(activity.type);
    const [emotion, setEmotion] = useState(activity.emotion);
    
    const [isReadOnly, setReadOnly] = useState(true);
    
    return(
      <tr id="rows" class="tr" padding="checkbox">
        <td>
          <input type="checkbox" />
        </td>
        <td class="fit-content">{activity.id}</td>

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
            id="type"
            class="input"
            type="text"
            defaultValue={type}
            onChange={(e) => setType(e.target.value)}
            readOnly={isReadOnly}
          />
        </td>

        <td>
          <input
            id="emotion"
            class="input"
            type="text"
            defaultValue={emotion}
            onChange={(e) => setEmotion(e.target.value)}
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
              updateActivity({
                id: activity.id,
                name,
                type,
                emotion
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
              deleteActivity(activity.id);
            }}
          >
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    )
}

export default ActivityRow;