import { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom'
import './style.css';

function App() {

  const [treatment, setTreatment] = useState("");
  const [code,setCode] = useState("");
  const [name,setName] = useState("");
  const [rate,setRate] = useState("");
  const [birth,setBirth] = useState("");
  const [parent,setParent] = useState("");
  const [note,setNote] = useState("");


  async function create(event){
    event.preventDefault()
    
    if(name && rate && birth && parent && note){
      await Axios.post(
        '/createdKid',
        {treatment, code, name, rate, birth, parent, note},
      
        window.alert('Cadastrado')
      )
      .then(response => 
        console.log(JSON.stringify({
          "tratamento": treatment,
          "codigo": code,
          "nome": name, 
          "grau": rate,
          "data de nascimento": birth,
          "responsavel": parent,
          "observações": note
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
          <Link to="/Kids">
            <button type="button" class="btn btn-primary">Voltar</button>
          </Link>
          <h5 class="navbar-brand float-center" text-align="center">Adicionando Criança</h5>
          <h1> </h1>
        </nav>
      </header>
     
      <body>
       
        <div class="backgroud-addKid float-center">
          
          <form class="form-addKid" onSubmit={create}>            
            <div class="form-row">
              <div class="form-check col-md float-center">
                <input type="checkbox" class="form-check-input" id="inputTreatment" onChange={(e)=>{setTreatment(e.target.value)}} />
                <label for="inputTreatment" class="form-check-label">Tratamento ativo</label>
              </div>
            </div>           

            <div class="form-infoKid float-center">
              
              <div class="form-group">
                <label htmlFor="code">Código de Acesso</label>
                <input type="number" id="code" name="code" class="form-control" placeholder="Defina um código de acesso" value={parseInt(Math.random()*10000)} onChange={(e)=>{setCode(e.target.value)}}/>
              </div>

              <div class="form-group">
                <label htmlFor="name"> Nome </label>
                <input type="text" id="name" name="name" class="form-control" placeholder="Digite o nome da criança" onChange={(e)=>{setName(e.target.value)}}/>
              </div>

              <div class="form-row">
                <div class="form-group-state col-md-6">
                  <label htmlFor="rate">Grau</label>
                  <select id="rate" name="rate" class="form-control" placeholder="Selecione" value={rate} onChange={(e)=>{setRate(e.target.value)}}>
                    <option> </option>
                    <option value = "severo" selected>Severo</option>
                    <option value = "moderado"selected>Moderado</option>
                    <option value = "leve"selected>Leve</option>
                  </select>
                </div>     
                <div class="form-group col-md-6">
                  <label htmlFor="birth">Data de nasc.</label>
                  <input type="text" id="birth" name="birth" class="form-control" onChange={(e)=>{setBirth(e.target.value)}}/>
                </div>
              </div>    

              <div class="form-group">
                <label htmlFor="parent">Responsável</label>
                <input type="text" id="parent" name="parent" class="form-control" placeholder="Nome do responsável" onChange={(e)=>{setParent(e.target.value)}}/>
              </div>

              <div class="form-group">
                <label htmlFor="note">Observações</label>
                <textarea type="text" id="note" name="note" class="form-control" placeholder="Detalhar criança" onChange={(e)=>{setNote(e.target.value)}}/> 
              </div>

              <div class="form-group col-md">
                <input type="file" id="photo" name="photo" class="custom-file-input" />
                <label htlmFor="photo" class="custom-file-label">Selecione um arquivo para foto</label>
              </div>

              <div class="form-group-button">
                <Link to="/Kids">
                  <button type="button" class="btn btn-primary">Cancelar</button>
                  <button  onClick ={create} Ontype="submit" class="btn btn-success">Adicionar</button>
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
