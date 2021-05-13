import { useState, useEffect} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom'
//import bootstrap from 'bootstrap'
import './style.css';

function App() {

    const [list, setList] = useState([]);
    const[id, setId] = useState("");

    useEffect(() => {
        Axios.get('http://localhost:3000/Kids').then((response) => {
          setList(response.data)
        });
    },[]);

    async function deleteKid(event){
        event.preventDefault();
        Axios.delete('http://localhost:3000/deletedKid', 
            { id }
        )
        .then((response) => {
            response.status("Apagado!")
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
                        <Link to="/addCrianca">
                            <button type="submit" class="btn btn-outline-primary my-2 my-sm-0 ">+</button>
                        </Link>
                        <div class="form-group-tb">
                            <div class="form-row" text-align="center">
                                <table class="table table-responsive table-selectable table-striped" float="auto">
                                    <thead>
                                        <tr>
                                            <th>Selecione</th>
                                            <th>id</th>
                                            <th>tratamento</th>
                                            <th>codigo</th>
                                            <th>nome</th>
                                            <th>grau</th>
                                            <th>nascimento</th>
                                            <th>responsavel</th>
                                            <th>obs</th>
                                        </tr>
                                    </thead>

                                    {list.map((val) => {
                                    return (
                                        //<CardCrianca val={val} handleDeletar={handleDeletar}/>
                                            
                                        <tbody>
                                            <tr class="tr">
                                                <td><input type="checkbox" onclick="{(e)=>{setId(e.target.id)}}"/></td>
                                                <td id="id">{val.id}</td>
                                                <td>{val.treatment} </td>
                                                <td>{val.code} </td>
                                                <td>{val.name} </td>
                                                <td>{val.rate} </td>
                                                <td>{val.birth} </td>
                                                <td>{val.parent} </td>
                                                <td>{val.note} </td>
                                            </tr>
                                        </tbody>
                                    )
                                    })}
                                
                                </table>
                            
                            </div>
                        </div>
                        
                        
                        <div class="form-group-btn">
                            <div class="form-group">
                                <div class="form-row">
                                    <Link>
                                        <button  class="btn btn-primary mr-sm-2" type="submit">Editar</button>
                                    </Link>
                                    <button class="btn btn-danger" type="submit" onClick={deleteKid}>Excluir</button>
                                </div>
                            </div> 
                        </div>   
                    </form>
                </div>
            </body>
        </div>
    )
}

export default App;
