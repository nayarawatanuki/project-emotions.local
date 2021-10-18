import React, { useState, useEffect} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom'
import ActivityList from '../../../components/ActivityList'
import './style.css';
import { useKidContext } from "../../../context/kidContext";

function App() {

    const [list, setList] = useState([]);
    const {kid_id} = useKidContext();

    useEffect(() => {
        Axios.get(`http://localhost:3000/kids/${kid_id}/listActivities`)
        .then((response) => {
            console.log({activity: response.data})
            setList(response.data)
        }).catch((error) => {
            console.error('error', error)
        });
    },[]);
    
    console.log({ list })

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
                <nav className="navbar navbar-light bg-light">
                    <Link to="/">
                        <button type="button" className="btn btn-primary">Voltar</button>
                    </Link>
                    <h5 className="navbar-brand float-center">Crianças</h5>
                    <h1> </h1>
                </nav>
            </header>
        
            <body>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossorigin="anonymous"></script>

                <div className="backgroud-Activities float-center">

                    <form className="form-Activities fit-content">
                        <div className="form-row">
                            <div className="chip">
                                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Person" width="96" height="96"></img>
                                Atividades
                            </div>
                            <Link to="/addActivity">
                                <button type="submit" className="btn btn-outline-info d-inline-block" width="auto">
                                    <i className="fas fa-plus"></i>
                                </button>
                            </Link>
                        </div>

                        <div className="form-group-tb">
                            <div className="form-group">
                                <div className="form-row">
                                    <input className="search mr-sm-2 col-4" width="auto" type="search" placeholder="Pesquisar" aria-label="Pesquisar"></input>
                                    <button className="btn btn-outline-info d-inline-block" width="auto" type="submit">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="form-row" text-align="center">
                                <table className="table table-responsive table-selectable table-striped" float="auto">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>id</th>
                                            <th>kid_id</th>
                                            <th>emotion</th>
                                            <th>response1</th>
                                            <th>response2</th>
                                            <th>response3</th>
                                            <th>respCorrect</th>
                                            <th>image</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {list.map((activity) => {
                                            return (   
                                                <ActivityList
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
                        

                        
            
                    </form>
                </div>            
            </body>
        </div>  
    );
}

export default App;