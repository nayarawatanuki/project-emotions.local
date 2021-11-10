import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from 'axios';

import GlobalStyle from '../../../styles/global';
import { App, Container, Content } from './styles';

import { useKidContext } from '../../../context/kidContext';
import { useTaskContext } from '../../../context/taskContext';

function Task3() {
  const {kid_name} = useKidContext();
  const {task_id} = useTaskContext();
  const [task, setTask] = useState([]);
  const [result, setResult] = useState(); 

  var tries=0;

  useEffect(() => {
    api.get(`http://localhost:3000/${kid_name}/tasks/taskListOne/${task_id}`)
    .then((response) => {
      console.log({task: response.data}),
      setTask([response.data])
    }).catch((error) => {
        console.error('error', error)
    });
  }, []);

  async function allowDrop(e) {
    await e.preventDefault();
  }

  async function drag(e) {
    await e.dataTransfer.setData("text", e.target.id);
  }

  async function drop(e) {
    await e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
  }

  return (
    <App>
      <nav className="navbar navbar-light bg-light">
        <Link to="/KidAcess">
          <button className="button button-danger">SAIR</button>
        </Link>
        <h4 className="navbar navbar-light float-center">Associando palavra a imagem</h4>
      </nav>

      <Container>
        <Content>
          {task.map((task) => {
            return (
              <div encType='multipar/form-data' fit-content="true">
                <div className='row' style={{marginTop: '2%', justifyContent: 'center'}}>
                  <img display="center"
                      onDragOver={(e)=> allowDrop(e)} 
                      onDrop={()=> {
                        tries++;
                        console.log('tentativas: ', tries);
                          
                        /*if( result === task.emotion ) {
                          //window.alert('Ops, tente outra vez.') 
                          swal({title: 'PARABÉNS!!!', icon: "https://i.pinimg.com/originals/63/9f/52/639f523a4803c6f00f51401b3158d452.gif"});
                        } else {
                          swal({title: 'não foi desta fez', icon: "https://w7.pngwing.com/pngs/108/553/png-transparent-smiley-sadness-emoticon-crying-smiley-faces-face-smiley-sticker.png"});
                        }*/

                        
                      }}
                      align="center"  
                      src={task.image} />
                </div>

                <div className="row" style={{marginTop: '5%', justifyContent: 'center'}}>
                  <label id="emotion1" name="emotion1" style={{marginRight: '4%'}}
                      value={task.response1}
                      draggable={true} 
                      onDragStart={(e)=> {setResult(task.response1); drag(e)}}
                      >{task.response1}
                  </label>
                

              
                  <label id="emotion2" name="emotion2" style={{marginRight: '4%'}}
                      value={task.response2} 
                      draggable={true} 
                      onDragStart={(e)=> {setResult(task.response2); drag(e)}}
                      >{task.response2}
                  </label>
              

              
                  <label id="emotion3" name="emotion3" 
                      value={task.response3}
                      draggable={true} 
                      onDragStart={(e)=> {setResult(task.response3); drag(e)}}
                      >{task.response3}
                  </label>
                </div>
                <div className="row" style={{marginTop: '5%', justifyContent: 'right'}}>
                  <button className="button button-save"
                    onClick={()=>{}}
                  >CONCLUIR</button>
                </div>
              </div>  
            )
          })}
        </Content>
        <GlobalStyle />
      </Container>
    </App>
  )
}

export default Task3;