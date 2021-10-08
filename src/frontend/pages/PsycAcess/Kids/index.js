import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import GlobalStyle from '../../../styles/global';
import { App, Container, Content, Table } from './styles.js';

import api from 'axios';
import KidList from '../../../components/KidList'
import './style.css';

function Kids() {
    const [kids, setKids] = useState([]);

    useEffect(() => {
        api.get('http://localhost:3000/listKids')
        .then((response) => {
          setKids(response.data)
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
            await api.put(`http://localhost:3000/updatedKid/${id}`,
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
        await api.delete(`http://localhost:3000/deletedKid/${id}`)
        .then((response) => {
            console.log(response.data);
            window.alert("Criança apagada!");
            
            const newList = kids.filter((kid) => kid.id !== id);
            setKids(newList);
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    return (
        <App>
            <nav className="navbar navbar-light bg-light">
                <Link to="/">
                    <button type="button" className="button button-info">Voltar</button>
                </Link>
                <h5 className="navbar-brand float-center">Crianças</h5>
                <h1> </h1>
            </nav>  
            <Container>
                <Content>
                    <form encType='multipar/form-data' fit-content="true">
                        <div className="chip">
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Person" width="96" height="96"></img>
                            Crianças
                        </div>
                        <Link to="/addKid">
                            <button type="submit" className="btn btn-outline-primary my-2 my-sm-0 ">+</button>
                        </Link>
                        <Table className= "table table-responsive">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>id</th>
                                    <th>photo</th>
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
                            <tbody>
                                {kids.map((kid) => {
                                    return (
                                        <KidList kid={kid} 
                                            updateKid={updateKid} 
                                            deleteKid={deleteKid} 
                                        />
                                    );
                                })}
                            </tbody>      
                        </Table>
                    </form>
                </Content>
                <GlobalStyle />
            </Container>            
        </App>
    );
}

export default Kids;