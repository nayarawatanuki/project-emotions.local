import { useState, useEffect} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom'
//import bootstrap from 'bootstrap'
import './style.css';

function App() {

    const [list, setList] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3000/Activities').then((response) => {
          setList(response.data)
        });
    },[]);

    const [listKids, setListKids] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3000/Kids').then((response) => {
          setListKids(response.data)
        });
    },[]);
  
    return (
        <div className="App">
            <header className="App-header">
                <nav class="navbar navbar-light bg-light">
                    <Link to="/">
                        <button type="button" class="btn btn-primary">
                            <i class="fas fa-home"></i>
                        </button>
                    </Link>
                    <h5 class="navbar-brand float-center">Atividades</h5>
                    <h1> </h1>
                </nav>
            </header>
        
            <body>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossorigin="anonymous"></script>

                <div class="backgroud-Activities">

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
                                            <th>Selecione</th>
                                            <th>id</th>
                                            <th>nome</th>
                                            <th>tipo</th>
                                            <th>emoção</th>
                                            <th>action</th>
                                        </tr>
                                    </thead>
                                    {list.map((val) => {
                                        return (
                                            //<CardCrianca val={val} handleDeletar={handleDeletar}/>   
                                            <tbody>
                                                <tr class="tr">
                                                    <td><input type="checkbox" value="1"/></td>
                                                    <td>{val.id}</td>
                                                    <td>{val.name} </td>
                                                    <td>{val.type} </td>
                                                    <td>{val.emotion} </td>
                                                    <td>
                                                        <Link to="/">
                                                            <button class="btn btn-sm btn-success d-inline-block mr-1">
                                                                <i class="fas fa-edit"></i>                
                                                            </button>
                                                        </Link>
                                                        <button class="btn btn-sm btn-danger d-inline-block">
                                                            <i class="fas fa-trash-alt"></i>               
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        )
                                    })}
                                </table>                                
                            </div>
                        </div>
                        
                        <div class="form-group-vinc">
                            <div class="form-group">
                                <label htmlFor="kids">Criança:</label>
                                <div class="form-row">
                                    <select id="kids" class="form-control mr-sm-2 col-4">
                                        {listKids.map((val) => {
                                            return (
                                                <option selected>{val.name}</option> 
                                            )
                                            })}
                                    </select>
                                    <Link to="/Menu">
                                        <button type="submit" class="btn btn-outline-success d-inline-block" width="auto">
                                            <i class="fas fa-sync"></i>
                                        </button>
                                    </Link>
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
