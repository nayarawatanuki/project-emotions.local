import React, { useState, useEffect } from 'react';
import api from '../../../services/api';

import GlobalStyle from '../../../global/styles';
import { App, Container, Content, Table } from './styles';

import TaskList from '../../../components/mappings/TaskList';
import { useKidContext } from "../../../context/kidContext";
import { Link } from 'react-router-dom';

function Tasks() {

    const [list, setList] = useState([]);
    const {kid_id} = useKidContext();
    const {kid_name} = useKidContext();

    useEffect(() => {
        api.get(`/tasks/${kid_id}/${kid_name}/listTasks`)
        .then((response) => {
            console.log({tasks: response.data})
            setList(response.data)
        }).catch((error) => {
            console.error('error', error)
        });
    },[]);
  
    return (
        <App>
            <nav className="navbar navbar-light bg-light">
                <Link to="/">
                    <button type="button" className="btn btn-primary">Voltar</button>
                </Link>
                <h5 className="navbar-brand float-center">Crianças</h5>
                <h1> </h1>
            </nav>

            <Container>
                <Content>
                    <form >
                        <div className="form-row">
                            <div className="chip">
                                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Person" width="96" height="96"></img>
                                {kid_name}
                            </div>
                        </div>

                        <div style={{marginTop: '4%'}}>
                            <Table className= "table table-responsive table-selectable">
                                <thead>
                                    <tr>
                                        <th hidden={true}>id</th>
                                        <th hidden={true}>kid_id</th>
                                        <th>tarefas</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {list.map((task) => {
                                        return (   
                                            <TaskList key={task.id}
                                                task={task} 
                                            />
                                        );
                                    })}
                                </tbody>
                            </Table>                                
                        </div>            
                    </form>
                </Content>
                <GlobalStyle />
            </Container>   
        </App>
    );
}

export default Tasks;