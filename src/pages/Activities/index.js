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
                        <button type="button" class="btn btn-primary">Voltar</button>
                    </Link>
                    <h5 class="navbar-brand float-center">Atividades</h5>
                    <h1> </h1>
                </nav>
            </header>
        
            <body>
                
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossorigin="anonymous"></script>

                <div class="backgroud-Activities float-center">

                    <form class="form-Activities">

                        <div class="form-row">
                            <div class="chip">
                                <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Person" width="96" height="96"></img>
                                Atividades
                            </div>
                            <Link to="/addAtividade">
                                <button type="submit" class="btn btn-outline-primary my-2 my-sm-0 ">+</button>
                            </Link>
                        </div>
                        <div class="form-row">
                            <div class="table-responsive-sm table-selectable col-4">
                                <table class="table table-striped table-selectable">
                                    <thead>
                                        <tr>
                                            <th>Selecione</th>
                                            <th>id</th>
                                            <th>nome</th>
                                            <th>tipo</th>
                                            <th>emoção</th>
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
                                            </tr>
                                        </tbody>
                                    )
                                    })}
                                </table>                                
                            </div>
                        
                            <div class="form-group-vinc col-sm-5">      
                                <div class="form-group">
                                    <div class="form-row">
                                        <input class="form-control mr-sm-2 col-8" type="search" placeholder="Pesquisar" aria-label="Pesquisar"></input>
                                        <button class="btn btn-outline-success my-2 my-sm-0 flat-center" type="submit">Pesquisar</button>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label htmlFor="kids">Criança:</label>
                                    <div class="form-row">
                                        <select id="kids" class="form-control mr-sm-2 col-8">
                                            {listKids.map((val) => {
                                                return (
                                                    <option selected>{val.name}</option> 
                                                )
                                             })}
                                        </select>
                                        <Link to="/Menu">
                                            <button class="btn btn-outline-success my-2 my-sm-0 flat-center" type="submit"> Vincular</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="form-group-btn">
                            <Link to="/addAtividade">
                                <button type="button" class="btn btn-success mr-sm-5">Adicionar nova atividade </button>
                            </Link>
                            <Link to="/">
                                <button type="button" class="btn btn-primary mr-sm-3">Editar</button>
                            </Link>
                            <button Ontype="submit" class="btn btn-danger">Excluir</button>
                        </div>
                    </form>
                </div>            
            </body>
        </div>

        
    )
}

export default App;
