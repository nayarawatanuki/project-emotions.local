import React, { useState } from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";
import { useKidContext } from "../../context/kidContext";
import { Preview } from './styles';

function ActivityList({ activity, updateActivity, deleteActivity }){ 

  const {kid_id} = useKidContext();
  const [emotion, setEmotion] = useState(activity.emotion);
  const [response1, setResponse1] = useState(activity.response1);
  const [response2, setResponse2] = useState(activity.response2);
  const [response3, setResponse3] = useState(activity.response3);
  const [respCorrect, setRespCorrect] = useState(activity.respCorrect);
  const [image, setImage] = useState(activity.image);
  
  
  const [isReadOnly, setReadOnly] = useState(true);
  
  return(
    <tr id="rows" className="tr" padding="checkbox">
      <td>
        <input type="checkbox" />
      </td>
      <td className="fit-content">{activity.id}</td>
      <td className="fit-content"> {kid_id}</td>

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
        <input
          id="response1"
          className="input"
          type="text"
          defaultValue={response1}
          onChange={(e) => setResponse1(e.target.value)}
          readOnly={isReadOnly}
        />
      </td>

      <td>
        <input
          id="response2"
          className="input"
          type="text"
          defaultValue={response2}
          onChange={(e) => setResponse2(e.target.value)}
          readOnly={isReadOnly}
        />
      </td>

      <td>
        <input
          id="response3"
          className="input"
          type="text"
          defaultValue={response3}
          onChange={(e) => setResponse3(e.target.value)}
          readOnly={isReadOnly}
        />
      </td>

      <td>
        <input
          id="respCorrect"
          className="input"
          type="text"
          defaultValue={respCorrect}
          onChange={(e) => setRespCorrect(e.target.value)}
          readOnly={isReadOnly}
        />
      </td>

      <td>
        <Preview
          src={image}
          id='image'
          //onChange={(e) => setPhoto(e.target.files[0])}
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

export default ActivityList;