import React, { useState, useEffect } from 'react';
import api from 'axios';
import { Link } from 'react-router-dom'
import TaskList from '../../../components/KidAcess/TaskList'
import './style.css';
import { useKidContext } from "../../../context/kidContext";

function Tasks() {

    const [list, setList] = useState([]);
    const {kid_id} = useKidContext();
    const {kid_name} = useKidContext();

    useEffect(() => {
        api.get(`http://localhost:3000/tasks/${kid_id}/${kid_name}/listTasks`)
        .then((response) => {
            console.log({tasks: response.data})
            setList(response.data)
        }).catch((error) => {
            console.error('error', error)
        });
    },[]);
  
    return (
        <div className="App">
            <nav className="navbar navbar-light bg-light">
                <Link to="/">
                    <button type="button" className="btn btn-primary">Voltar</button>
                </Link>
                <h5 className="navbar-brand float-center">Crianças</h5>
                <h1> </h1>
            </nav>
            
        
            

            <div className="backgroud-Activities float-center">

                <form className="form-Activities fit-content">
                    <div className="form-row">
                        <div className="chip">
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Person" width="96" height="96"></img>
                            {kid_name}
                        </div>
                    </div>

                    <div className="form-group-tb" style={{marginTop: '4%'}}>
                        
                        <div className="form-row" text-align="center">
                            <table className="table table-responsive table-selectable table-striped" float="auto">
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
                            </table>                                
                        </div>
                    </div>            
                </form>
            </div>           
        </div>  
    );
}

export default Tasks;