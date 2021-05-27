import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom'
import './style.css';

function App() {

    const [list, setList] = useState([]);
    const [id,setID] = useState([]);
    
    useEffect(() => {
        Axios.get('http://localhost:3000/Kids')
        .then((response) => {
          setList(response.data)
        });
    },[list]);

    async function deleteKid(id){
        console.log("id delete", id);

        await Axios.delete(`http://localhost:3000/deletedKid/${id}`)
        .then((response) => {
            console.log(response.data);
            window.alert("Criança apagada!");
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    function inputs() {
        document.getElementById("trows").style.backgroundColor = "#91e3ee";
        document.getElementsByTagName("input").style = "cursor: text;"; //sem sucesso, input nao editavel tambem por conta de estar inserindo valores
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
                                <table class="table table-responsive table-selectable " float="auto">
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
                                            <th>ação</th>
                                        </tr>
                                    </thead>

                                    {list.map((kid) => {
                                    return (
                                        <tbody>
                                            <tr id="trows" class="tr" padding="checkbox">
                                                <td><input type="checkbox"></input></td>
                                                <td class="fit-content">
                                                    <input class="input" type="text" value={kid.id} onChange={(e) => setID(e.target.value)}/>
                                                </td>
                                                <td>
                                                    <input class="input" type="text" value={kid.treatment}/>
                                                </td>
                                                <td>
                                                    <input class="input" type="text" value={kid.code}/> 
                                                </td>
                                                <td>
                                                    <input class="input" type="text" value={kid.name}/> 
                                                </td>
                                                <td>
                                                    <input class="input" type="text" value={kid.rate}/>
                                                </td>
                                                <td>
                                                    <input class="input" type="text" value={kid.birth}/> 
                                                </td>
                                                <td>
                                                    <input class="input" type="text" value={kid.parent}/>
                                                </td>
                                                <td>
                                                    <input class="input" type="text" value={kid.note}/>
                                                </td>
                                                <td>
                                                    <button class="btn btn-sm btn-success d-inline-block mr-1" onClick={(e) => {e.preventDefault(); inputs()}}>
                                                        <i class="fas fa-edit"></i>       
                                                    </button>
                                                    <button class="btn btn-sm btn-danger d-inline-block" onClick={(e) => {e.preventDefault(); deleteKid(kid.id)}}>
                                                        <i class="fas fa-trash-alt"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    );
                                    })}
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
