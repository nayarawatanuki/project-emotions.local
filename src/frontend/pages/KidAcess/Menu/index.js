import React, { useState } from "react";
import { Link } from 'react-router-dom'
import api from 'axios';

import GlobalStyle from '../../../styles/global';
import { App, Container, Content, Table } from './styles';

import { useKidContext } from "../../../context/kidContext";

function KidAcess() {

    const {setKid_name} = useKidContext();
    const {setKid_id} = useKidContext();
    const [id, setId] = useState();
    const [user, setUser] = useState();

    function login() {
        var data = new FormData();

        data.append('id', document.getElementById('id').value);
        data.append('user', document.getElementById('user').value);
        data.append('code', document.getElementById('code').value);
    
        for (var key of data.entries()) {
          console.log(key[0] + ': ' + key[1]);
        }
    
        api.get('http://localhost:3000/login', data)
        .then((response) => {
            response.data
        });
      }
    
    return (
        <App>
            <nav className="navbar navbar-light bg-light">
                <h4 className="navbar float-center">HOME</h4>
            </nav>
        
            <Container>
                <Content>
                    <form> 
                        <h1>Vamos começar?</h1>
                        
                        <div className="form-group">
                            <label htmlFor="id">id</label>
                            <input type="text" id="id" name="id" className="form-control" placeholder="id" onChange={(e) => setId(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="user">User</label>
                            <input type="text" id="user" name="user" className="form-control" placeholder="usuario" onChange={(e) => setUser(e.target.value)}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="code">Senha</label>
                            <input type="text" id="code" name="code" className="form-control" placeholder="senha" /> 
                        </div>
                        
                        <Link to={{ pathname: "/Tasks", search: `${user}`}}>
                            <button
                            id="list"
                            className="button button-info btn-lg btn-block float-center"
                            onClick={(e) => {
                                setKid_id(id),
                                setKid_name(user),
                                login
                            }}
                            >
                            Entrar
                            </button>
                        </Link>
                    </form>
                </Content>
                <GlobalStyle />
            </Container>
        </App>                
    )
    
}
export default KidAcess;