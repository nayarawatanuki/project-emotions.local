import { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom'
import './style.css';

function App() {
    
    const [message,setMessage] = useState("");
    const [image, setImage] = useState ("");
    const [word1, setWord1] = useState("");
    const [word2, setWord2] = useState("");
    const [word3, setWord3] = useState("");
    const [option,setOption] = useState("");

    async function create(event){
        event.preventDefault();
    
        if(message && word1 && word2 && word3 && option){
        await Axios.post(
            '/createActivity',
            {message, word1, word2, word3, option},
            
            window.alert('Cadastrado')
            )
            .then(response => 
            console.log(JSON.stringify({
                "message": message,
                "word1": word1,
                "word2": word2,
                "word3": word3, 
                "option": option
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
                            <label htmlFor="message">Enunciado:</label>
                            <input type="text" id="message" name="message" class="form-control" placeholder="Mensagem" onChange={(e)=>{setMessage(e.target.value)}}/> 
                        </div>

                        <h5>Estrutura da Atividade</h5>
                        
                        <div class="form-row">
                            <div class="form-group col-md-6 mr-sm-2">
                                <div class="form-group">
                                    <input type="file" id="image" name="image" class="custom-file-input" />
                                    <label htlmFor="image" class="custom-file-label">Selecione um arquivo</label>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="form-group">
                                    <button type="button" class="btn btn-primary">Selecionar arquivo do banco</button>
                                </div>
                            </div>
                        </div> 

                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <input type="text" id="word1" name="word1" class="form-control" placeholder="palavra 1" onChange={(e)=>{setWord1(e.target.value)}}/>
                            </div>

                            <div class="form-group col-md-4">
                                <input type="text" id="word2" name="word2" class="form-control" placeholder="palavra 2" onChange={(e)=>{setWord2(e.target.value)}}/>
                            </div>
                            
                            <div class="form-group col-md-4">
                                <input type="text" id="word3" name="word3" class="form-control" placeholder="palavra 3" onChange={(e)=>{setWord3(e.target.value)}}/>
                            </div>
                        </div>

                        <div class="form-row">
                            
                            <div class="form-group col-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="option" id="option1" onChange={(e)=>{setOption(e.target.id)}}></input>
                                    <label for="option1">
                                        alternativa correta
                                    </label>
                                </div>
                            </div>

                            <div class="form-group col-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="option" id="option2" onChange={(e)=>{setOption(e.target.id)}}></input>
                                    <label for="option2">
                                        alternativa correta
                                    </label>
                                </div>
                            </div>

                            <div class="form-group col-md-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="option" id="option3" onChange={(e)=>{setOption(e.target.id)}}></input>
                                    <label for="option3">
                                        alternativa correta
                                    </label>
                                </div>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <button type="button" class="btn btn-info">Recompensa</button>
                        </div>

                        <div class="form-group-button">
                            <Link to="/Activities">
                                <button type="button" class="btn btn-primary">Cancelar</button>
                                <button  onClick ={create} Ontype="submit" class="btn btn-primary">Adicionar</button>
                            </Link>
                        </div>

                    </form>

                </div>

            </body>

        </div>

    );
}

export default App;