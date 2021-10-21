import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import api from 'axios';

import GlobalStyle from '../../../styles/global';
import { App, Container, Content } from './styles';

import TaskValues from '../../../components/KidAcess/TaskValues'
import { useKidContext } from "../../../context/kidContext";
import { useTaskContext } from "../../../context/taskContext";

function TaskImgEmotion() {

  const [list, setList] = useState([]);
  const {kid_name} = useKidContext();
  const {task_id} = useTaskContext();

  useEffect(() => {
    api.get(`http://localhost:3000/tasks/${kid_name}/${task_id}/taskListOne`)
    .then((response) => {
        console.log({task: response.data})
        setList(response.data)
    }).catch((error) => {
        console.error('error', error)
    });
  },[]);
  
    function allowDrop(e) {
      e.preventDefault();
    }
  
    function drag(e) {
      e.dataTransfer.setData("text", e.target.id);
    }
  
    function drop(e) {
      e.preventDefault();
      var data = e.dataTransfer.getData("text");
      e.target.appendChild(document.getElementById(data));
    }
      return (
          <App>
              <nav class="navbar navbar-light bg-light">
                <Link to="/KidAcess">
                  <button type="button" class="button button-danger">SAIR</button>
                </Link>
                <h4 class="navbar float-center">Associando palavras com imagens</h4>
              </nav>
          
              <Container>
                  <Content>
                    <form> 
                      {list.map((task) => {
                        return (   
                            <TaskValues
                                task={task} 
                                allowDrop={allowDrop} 
                                drag={drag}
                                drop={drop}
                            />
                        );
                      })}
                    </form>
                  </Content>
                  <GlobalStyle />
              </Container>
          </App>                
      )
}

export default TaskImgEmotion;