import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import api from 'axios';

import GlobalStyle from '../../../styles/global';
import { App, Container, Content } from './styles';

import ActivityValues from '../../../components/ActivityValues'
import { useKidContext } from "../../../context/kidContext";

function TaskImgWords() {

  const [list, setList] = useState([]);
  const {kid_id} = useKidContext();

  useEffect(() => {
    api.get(`http://localhost:3000/kids/1/listTasks`)
    .then((response) => {
        console.log({activity: response.data})
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
                      {list.map((activity) => {
                        return (   
                            <ActivityValues
                                activity={activity} 
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

export default TaskImgWords;