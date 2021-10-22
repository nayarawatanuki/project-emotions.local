import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from 'axios';

import GlobalStyle from '../../../styles/global';
import { App, Container, Content } from './styles';

import { useKidContext } from '../../../context/kidContext';
import { useTaskContext } from '../../../context/taskContext';

function TaskImgEmotion() {
  const {kid_name} = useKidContext();
  const {task_id} = useTaskContext();
  const [task, setTask] = useState([]);

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
          <div className="App"> 
            {task.map((task) => {
              return (
                <div encType='multipar/form-data' fit-content="true">
                  <div className='row' style={{marginTop: '2%', justifyContent: 'center'}}>
                    <img display="center"
                        onDragOver={(e)=> allowDrop(e)} 
                        onDrop={(e)=> drop(e)} align="center"  
                        src={task.image} />
                  </div>

                  <div className='row' style={{marginTop: '5%', justifyContent: 'center'}}>
                    <div style={{marginRight: '4%'}}>
                        <label id="emotion1" name="emotion1" 
                            value={task.response1}
                            draggable={true} 
                            onDragStart={(e)=> drag(e)}
                            onDragEnd={()=> {
                                if(task.response1 != task.respCorrect) {
                                    window.alert('Ops, tente outra vez.') 
                                }else {
                                    window.alert('PARABENS!!!')
                                }
                            }}>{task.response1}
                        </label>
                    </div>  

                    <div style={{marginRight: '4%'}}>
                        <label id="emotion2" name="emotion2" 
                            value={task.response2} 
                            draggable={true} 
                            onDragStart={(e)=> drag(e)}
                            onDragEnd={()=> {
                                if(task.response2 != task.respCorrect) {
                                    window.alert('Ops, tente outra vez.') 
                                }else {
                                    window.alert('PARABENS!!!')
                                }
                            }}>{task.response2}
                        </label>
                    </div>

                    <div>
                        <label id="emotion3" name="emotion3" 
                            value={task.response3}
                            draggable={true} 
                            onDragStart={(e)=> drag(e)} 
                            onDragEnd={()=> {
                                if(task.response3 != task.respCorrect) {
                                    window.alert('Ops, tente outra vez.') 
                                }else {
                                    window.alert('PARABENS!!!')
                                }
                            }}>{task.response3}
                        </label>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Content>
        <GlobalStyle />
      </Container>
    </App>
  )
}

export default TaskImgEmotion;