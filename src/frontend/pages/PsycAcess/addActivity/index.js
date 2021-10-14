import React, { Component, useState } from 'react';
import { uniqueId } from 'lodash';

import GlobalStyle from '../../../styles/global';
import { App, Container, Content } from './styles.js';

import Axios from 'axios';
import { Link, useHistory } from 'react-router-dom'

function addActivity() {
    const history = useHistory();

    const [type,setType] = useState("");

    async function create(){    
        if(!name || !type || !emotion){
            window.alert('Prencha todos os campos')
        }

        await Axios.post(
            '/createdActivity',
            { type },
            
            window.alert('Cadastrado')
            )
            .then(response => 
            console.log(JSON.stringify({
                "tipo": type,
            })),
            console.log("Enviado!")
        );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await create(); 
    
        history.push('/Activities')
    }

    return (
        <App>
            <nav className="navbar navbar-light bg-light">
                <Link to="/Activities">
                    <button type="button" className="button button-info">Voltar</button>
                </Link>
                <h5 className="navbar-brand float-center">Adicionando atividade</h5>
                <h1> </h1>
            </nav>
            <Container>
                <Content>
                    <form onSubmit={create}>
                        <div className="form-group">
                            <label htmlFor="type">Tipo:</label>
                            <select id="type" name="type" className="form-control" placeholder="Selecione" value={type} onChange={(e)=>{setType(e.target.value)}}>
                                <option> </option>
                                <option value = "Apresentação" selected>Apresentação</option>
                                <option value = "Associação de imagem com palavra" selected>Associação de imagem com palavra</option>
                                <option value = "Associação de imagens" selected>Associação de imagens</option>
                            </select>
                        </div> 
                        <div> 
                            <Link to="/Activities">
                                <button type="button" className="btn btn-primary">Cancelar</button>
                            </Link>
                            <Link to="/addImgEmotion">
                                <button  onClick ={handleSubmit} Ontype="submit" className="btn btn-success">Proximo</button>
                            </Link>
                        </div>
                    </form>
                </Content>
                <GlobalStyle />
            </Container>
        </App>
    )
}

export default addActivity;