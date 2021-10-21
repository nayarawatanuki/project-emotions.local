import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useKidContext } from "../../../context/kidContext";

function TaskList({ task }){ 

  
  const {kid_id} = useKidContext();
  const [name, setName] = useState(task.name);
  const [id, setId] = useState(task.id)
  
  return(
    <tr id="rows" className="tr" padding="checkbox">
      <td className="fit-content" hidden={true}>{task.id}</td>
      <td className="fit-content" hidden={true}> {kid_id}</td>
      <td className="fit-content"> {name}</td>

      <td>
        <Link to={{ pathname: "/TaskImgEmotion", search: `${task.id}`}}>
          <button
            id="list"
            className="btn btn-sm btn-info d-inline-block mr-1"
            onClick={(e) => {
              setId(`${task.id}`)
            }}
          >
            <i className="fas fa-play"></i>
          </button>
        </Link>
      </td>
    </tr>   
  )
}

export default TaskList;