import React, { useState } from "react";
import { Link, useHistory } from 'react-router-dom'
import api from 'axios';

import GlobalStyle from '../../../styles/global';
import { App, Container, Content, Table } from './styles';

import { useKidContext } from "../../../context/kidContext";

function KidAcess() {

    const {setKid_name} = useKidContext();
    const {setKid_id} = useKidContext();
    const [user, setUser] = useState();
    const [code, setCode] = useState();
    const history = useHistory();
    
    async function login(){    

        await api.post(
            'http://localhost:3000/login',
            { user, code }
        )
        .then(response => 
            setKid_id(response.data),
            window.alert('deu certo')
            
        ).catch(() => {
            console.error('errado')
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(); 
    
        setKid_name(user);
        history.push('/Tasks');
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
                            <label htmlFor="user">User</label>
                            <input type="text" 
                                id="user" 
                                name="user" 
                                className="form-control" 
                                placeholder="usuario" 
                                onChange={(e) => setUser(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="code">Senha</label>
                            <input type="text" 
                                id="code" 
                                name="code" 
                                className="form-control" 
                                placeholder="senha" 
                                onChange={(e) => setCode(e.target.value)}
                            /> 
                        </div>
                        
                        
                        
                        <button
                            id="list"
                            className="button button-info btn-lg btn-block float-center"
                            onClick={handleSubmit}
                        >
                            Entrar
                        </button>
                        
                        
                    </form>
                </Content>
                <GlobalStyle />
            </Container>
        </App>                
    )
    
}
export default KidAcess;