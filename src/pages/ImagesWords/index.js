import { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom'
import './style.css';

function App() {
    
    const [name,setName] = useState("");
    const [type,setType] = useState("");
    const [emotion,setEmotion] = useState("");


    async function create(event){
        event.preventDefault();
    
        if(name && type && emotion){
        await Axios.post(
            '/createActivity',
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

        }else{
        window.alert('Prencha todos os campos')
        }

    }

    return (
        <div className="App">
           
            <header className="App-header">
                <nav class="navbar navbar-light bg-light">
                    <Link to="/Atividades">
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
                                <Link to="/Atividades">
                                    <button type="button" class="btn btn-primary">Cancelar</button>
                                    <button  onClick ={create} Ontype="submit" class="btn btn-primary">Adicionar</button>
                                </Link>
                            </div>

                        </div>

                    </form>

                </div>

            </body>

        </div>

    );
}

export default App;