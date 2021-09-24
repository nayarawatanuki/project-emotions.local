import React, { useState, useEffect} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom'
import ActivityRow from './ActivityRow'
import './style.css';

function App() {

    const [list, setList] = useState([]);
    const [listKids, setListKids] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3000/listActivities')
        .then((response) => {
          setList(response.data)
        });
    },[]);

    useEffect(() => {
        Axios.get('http://localhost:3000/listKids')
        .then((response) => {
          setListKids(response.data)
        });
    },[]);

    async function updateActivity({id, name, type, emotion}){ 

        if(name !== "" && type !== "" && emotion !== ""){
            await Axios.put(`http://localhost:3000/updatedActivity/${id}`,
              { name, type, emotion }
            )
            .then(response => {
                console.log(response);
                console.log(JSON.stringify({
                    "tratamento": name,
                    "codigo": type,
                    "nome": emotion
                }));
                console.log("Atividade atualizada!");
                window.alert('Atividade atualizada!');
                document.getElementById("rows").style.backgroundColor = "#fff";
            });
        }else{
            window.alert('Prencha todos os campos')
        }
    }

    async function deleteActivity(id){
        console.log("id delete", id);

        await Axios.delete(`http://localhost:3000/deletedActivity/${id}`)
        .then((response) => {
            console.log(response.data);
            window.alert("Atividade apagada!");

            const newList = list.filter((activity) => activity.id !== id);
            setList(newList);
        })
        .catch((error)=>{
            console.log(error);
        });
    }
  
    return (
        <div className="App">
            <header className="App-header">
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <nav class="navbar navbar-light bg-light">
                    <Link to="/">
                        <button type="button" class="btn btn-primary">Voltar</button>
                    </Link>
                    <h5 class="navbar-brand float-center">Crianças</h5>
                    <h1> </h1>
                </nav>
            </header>
        
            <body>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossorigin="anonymous"></script>

                <div class="backgroud-Activities float-center">

                    <form class="form-Activities fit-content">
                        <div class="form-row">
                            <div class="chip">
                                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Person" width="96" height="96"></img>
                                Atividades
                            </div>
                            <Link to="/addActivity">
                                <button type="submit" class="btn btn-outline-info d-inline-block" width="auto">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </Link>
                        </div>

                        <div class="form-group-tb">
                            <div class="form-group">
                                <div class="form-row">
                                    <input class="search mr-sm-2 col-4" width="auto" type="search" placeholder="Pesquisar" aria-label="Pesquisar"></input>
                                    <button class="btn btn-outline-info d-inline-block" width="auto" type="submit">
                                        <i class="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="form-row" text-align="center">
                                <table class="table table-responsive table-selectable table-striped" float="auto">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>id</th>
                                            <th>nome</th>
                                            <th>tipo</th>
                                            <th>emoção</th>
                                            <th>ação</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {list.map((activity) => {
                                            return (   
                                                <ActivityRow 
                                                    activity={activity} 
                                                    updateActivity={updateActivity} 
                                                    deleteActivity={deleteActivity} 
                                                />
                                            );
                                        })}
                                    </tbody>
                                </table>                                
                            </div>
                        </div>
                        

                        <div class="form-group-vinc">
                            <div class="form-group">
                                <label htmlFor="kids">Criança:</label>
                                <div class="form-row">
                                    <select id="kids" class="form-control mr-sm-2 col-4">
                                        {listKids.map((kid) => {
                                            return (
                                                <option selected>{kid.name}</option> 
                                            )
                                            })}
                                    </select>
                                    <Link to="/Menu">
                                        <button type="submit" class="btn btn-outline-success d-inline-block" width="auto">
                                            <i class="fas fa-sync"></i>
                                        </button>
                                    </Link>

                                    <Link to="/ImagesWords">
                                        <button type="submit" class="btn btn-outline-success d-inline-block" width="auto">
                                            <i class="fas fa-plus"></i>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>            
            </body>
        </div>  
    );
}

export default App;