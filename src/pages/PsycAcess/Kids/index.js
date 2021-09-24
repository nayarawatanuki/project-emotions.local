import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom'
import KidRow from './KidRow'
import './style.css';

function App() {
    const [list, setList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3000/listKids')
        .then((response) => {
          setList(response.data)
        });
    }, []);

    async function updateKid({
        id,
        treatment,
        code,
        name,
        rate,
        birth,
        parent,
        note,
    }){

        if(name !== "" && rate !== "" && birth !== "" && parent !== "" && note !== ""){
            await Axios.put(`http://localhost:3000/updatedKid/${id}`,
              { treatment, code, name, rate, birth, parent, note }
            )
            .then(response => {
                console.log(response);
                console.log(JSON.stringify({
                    "tratamento": treatment,
                    "codigo": code,
                    "nome": name, 
                    "grau": rate,
                    "data de nascimento": birth,
                    "responsavel": parent,
                    "observações": note
                }));
                console.log("Criança atualizada!");
                window.alert('Criança atualizada!');
                document.getElementById("rows").style.backgroundColor = "#fff";
            });
        }else{
            window.alert('Prencha todos oss campos')
        }
    }

    async function deleteKid(id){
        console.log("id delete", id);
        await Axios.delete(`http://localhost:3000/deletedKid/${id}`)
        .then((response) => {
            console.log(response.data);
            window.alert("Criança apagada!");
            
            const newList = list.filter((kid) => kid.id !== id);
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

                <div class="backgroud-Kids float-center">

                    <form class="form-Kids fit-content">
                        <div class="chip">
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Person" width="96" height="96"></img>
                            Crianças
                        </div>
                        <Link to="/addKid">
                            <button type="submit" class="btn btn-outline-primary my-2 my-sm-0 ">+</button>
                        </Link>
                        <div class="form-group-tb">
                            <div class="form-row" text-align="center">
                                <table class="table table-responsive table-selectable-multiple" float="auto">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>id</th>
                                            <th>tratamento</th>
                                            <th>codigo</th>
                                            <th>nome</th>
                                            <th>grau</th>
                                            <th>nascimento</th>
                                            <th>responsavel</th>
                                            <th>obs</th>
                                            <th>photo</th>
                                            <th>ação</th>
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                        {list.map((kid) => {
                                            return (
                                                <KidRow kid={kid} 
                                                        updateKid={updateKid} 
                                                        deleteKid={deleteKid} 
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