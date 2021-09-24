import { useState } from 'react';
import Axios from 'axios';
import { Link, useHistory } from 'react-router-dom'
import './style.css';

function App() {
    const history = useHistory();

    const [name,setName] = useState("");
    const [type,setType] = useState("");
    const [emotion,setEmotion] = useState("");


    async function create(){    
        if(!name || !type || !emotion){
            window.alert('Prencha todos os campos')
        }

        await Axios.post(
            '/createdActivity',
            {name, type, emotion},
            
            window.alert('Cadastrado')
            )
            .then(response => 
            console.log(JSON.stringify({
                "nome": name, 
                "tipo": type,
                "emoção trabalhada": emotion
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
        <div className="App">
           
            <header className="App-header">
                <nav class="navbar navbar-light bg-light">
                    <Link to="/Activities">
                        <button type="button" class="btn btn-primary">Voltar</button>
                    </Link>
                    <h5 class="navbar-brand float-center" text-align="center">Adicionando Atividade</h5>
                    <h1> </h1>
                </nav>
            </header>
        
            <body>
        
                <div class="backgroud-addActivity float-center">
                    
                    <form class="form-addActivity" onSubmit={create}>
                        
                        <div class="form-group">
                            <label htmlFor="name">Nome da atividade:</label>
                            <input type="text" id="name" name="name" class="form-control" placeholder="Digite o nome da atividade" onChange={(e)=>{setName(e.target.value)}}/>
                        </div>

                        

                        <div class="form-group">
                            <label htmlFor="type">Tipo:</label>
                            <select id="type" name="type" class="form-control" placeholder="Selecione" value={type} onChange={(e)=>{setType(e.target.value)}}>
                                <option> </option>
                                <option value = "Apresentação" selected>Apresentação</option>
                                <option value = "Associação de imagem com palavra" selected>Associação de imagem com palavra</option>
                                <option value = "Associação de imagens" selected>Associação de imagens</option>
                            </select>
                        </div> 

                        <div class="form-group">
                            <label>Emoção Trabalhada:</label>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="emotion" id="felicidade" onChange={(e)=>{setEmotion(e.target.id)}}></input>
                                <label class="form-check-label" for="felicidade">
                                    Felicidade
                                </label>
                            </div>
                            
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="emotion" id="tristeza" onChange={(e)=>{setEmotion(e.target.id)}}></input>
                                <label class="form-check-label" for="tristeza">
                                    Tristeza
                                </label>
                            </div>
                            
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="emotion" id="raiva" onChange={(e)=>{setEmotion(e.target.id)}}></input>
                                <label class="form-check-label" for="raiva">
                                    Raiva
                                </label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="emotion" id="medo" onChange={(e)=>{setEmotion(e.target.id)}}></input>
                                <label class="form-check-label" for="medo">
                                    Medo
                                </label>
                            </div>
                            
                            <div class="form-group-button">
                                <Link to="/Activities">
                                    <button type="button" class="btn btn-primary">Cancelar</button>
                                </Link>

                                <button  onClick ={handleSubmit} Ontype="submit" class="btn btn-success">Adicionar</button>
                            </div>

                        </div>

                    </form>

                </div>

            </body>

        </div>

    );
}

export default App;