import React, { useState, useEffect, useLayoutEffect } from 'react';
import api from '../../../services/api';

import GlobalStyle from '../../../global/styles';
import { App, Container, Content } from './styles';

import { Link, useHistory } from 'react-router-dom';
import { useKidContext } from '../../../context/kidContext';
import { useTaskContext } from '../../../context/taskContext';

function Task3() {
  const {kid_name} = useKidContext();
  const {task_id} = useTaskContext();
  const [task, setTask] = useState([]);

  const [time, setTime] = useState(0);
  const [response, setResponse] = useState();
  const [tries, setTries] = useState(1);
  const [status, setStatus] = useState('realizada');
  
  const [isActive, setIsActive] = useState(true);
  const history = useHistory();

  useLayoutEffect(() => {
    api.get(`/${kid_name}/tasks/taskListOne/${task_id}`)
    .then((response) => {
      setTask([response.data]);
    }).catch((error) => {
        console.error('error', error) 
    });
  }, []);

  useEffect(() => {
    let interval = null;
    if(isActive){
      interval = setInterval(() => {
        setTime(time => time + 1);
      }, 1000);
    } else if(!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

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

  function stopTime() {
    setIsActive(false);
    setTime(time);
    setResponse(response);
  }

  async function create(){  

    await api.post(
        `/tasks/${task_id}/createdTaskResult`,
        { task_id, response, tries, time },
        
        //window.alert('Atividade finalizada!')
        )
        .then(response => 
        console.log(JSON.stringify({
            "task_id": task_id,
            "response": response,
            "tries": tries,
            "time": time
        })),
        console.log("Enviado!")
    );
  }

  async function updateTask() {

    await api.put(`/tasks/${task_id}/updatedTask`,
    { status }
    ).then(response => {
      console.log(response);
      console.log(JSON.stringify({
          "status": status
      }));
      console.log("Task atualizada!");
    });
  }
  

  const sendTask = async () => {
    await create();
    updateTask();
    history.push('/Tasks');
  }

  return (
    <App>
      <nav className="navbar navbar-light bg-light">
        <Link to="/KidAcess">
          <button className="button button-danger">SAIR</button>
        </Link>
        <h4 className="navbar navbar-light float-center">Associando palavra a imagem</h4>
        <h1>{time} time</h1>
      </nav>
      <Container>
        <Content>
          {task.map((task) => {
            return (
              <form encType='multipar/form-data' fit-content="true" key={task.id}>
                <div className='row' style={{marginTop: '2%', justifyContent: 'center'}}>
                  <img display="center"
                    onDragOver={(e)=> allowDrop(e)} 
                    onDrop={()=> {                        
                      if( response === task.emotion ) {
                        stopTime();
                        swal({title: 'PARABÉNS!!!', icon: "https://i.pinimg.com/originals/63/9f/52/639f523a4803c6f00f51401b3158d452.gif"})
                        .then(() => {
                          sendTask();
                        })
                      } else {
                        setTries(tries+1);
                        console.log('tentativas: ', tries);
                        stopTime();
                        swal({title: 'não foi desta fez', icon: "https://w7.pngwing.com/pngs/108/553/png-transparent-smiley-sadness-emoticon-crying-smiley-faces-face-smiley-sticker.png"})
                        .then(() => {
                          setIsActive(true);
                        })
                      }
                    }}
                    align="center"  
                    src={task.image} 
                  />
                </div>

                <div className="row" style={{marginTop: '5%', justifyContent: 'center'}}>
                  <label id="emotion1" name="emotion1" style={{marginRight: '4%'}}
                    value={task.response1}
                    draggable={true} 
                    onDragStart={(e)=> {drag(e); setResponse(task.response1)}}
                    >{task.response1}
                  </label>

                  <label id="emotion2" name="emotion2" style={{marginRight: '4%'}}
                    value={task.response2} 
                    draggable={true} 
                    onDragStart={(e)=> {drag(e); setResponse(task.response2)}}
                    >{task.response2}
                  </label>

                  <label id="emotion3" name="emotion3" 
                    value={task.response3}
                    draggable={true} 
                    onDragStart={(e)=> {drag(e); setResponse(task.response3)}}
                    >{task.response3}
                  </label>
                </div>
              </form>
            )
          })}

          <div className="row" style={{marginTop: '5%', justifyContent: 'right'}}>
            <button className="button button-save"
              onClick={(e) => {
                swal({
                  title: 'Tem certeza que deseja finalizar a tarefa?',
                  text: 'Uma vez finalizada, não poderá refaze-la',
                  icon: 'warning',
                  buttons: ["Recomeçar", "Finalizar"]
                }).then((willFinalizar) => {
                  if(willFinalizar) {
                    swal('Resultados salvos', {
                      icon: 'success',
                    }).then(() => {
                      e.preventDefault();
                      sendTask();
                    });
                  } else {
                    setTries(1);
                    setTime(0);
                    setIsActive(true);
                  }
                });

                stopTime();
                console.log('time: ', time);
              }}
            >CONCLUIR</button>
          </div>
        </Content>
        <GlobalStyle />
      </Container>
    </App>
  )
}

export default Task3;