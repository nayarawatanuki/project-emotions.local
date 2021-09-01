import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom'
import './style.css';


function App() {

    const [list, setList] = useState([]);

    const [treatment, setTreatment] = useState();
    const [code,setCode] = useState();
    const [name,setName] = useState();
    const [rate,setRate] = useState();
    const [birth,setBirth] = useState();
    const [parent,setParent] = useState();
    const [note,setNote] = useState();
    
    useEffect(() => {
        Axios.get('http://localhost:3000/Kids')
        .then((response) => {
          setList(response.data)
        });
    },[list]);

    async function updateKid(id){

        if(name !== "" && rate !== "" && birth !== "" && parent !== "" && note !== ""){
            await Axios.put(`http://localhost:3000/updatedKid/${id}`,
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
            window.alert('Prencha todos os campos')
        }
    }

    async function deleteKid(id){
        console.log("id delete", id);
        await Axios.delete(`http://localhost:3000/deletedKid/${id}`)
        .then((response) => {
            console.log(response.data);
            window.alert("Criança apagada!");
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    function tagInputs() {
        //selecionando linha da tabela (meio gambiarra rs)
        document.getElementById("rows").style.backgroundColor = "#91e3ee";

        //REMOVENDO ATRIBUTO readOnly!!!!
        document.getElementById("treatment").removeAttribute("readonly");
        document.getElementById("code").removeAttribute("readonly"); 
        document.getElementById("name").removeAttribute("readonly");
        document.getElementById("rate").removeAttribute("readonly");
        document.getElementById("birth").removeAttribute("readonly");
        document.getElementById("parent").removeAttribute("readonly");
        document.getElementById("note").removeAttribute("readonly");
    }

    function tagInputs2() {
        //selecionando linha da tabela (meio gambiarra rs)
        document.getElementById("rows").style.backgroundColor = "##fff";

        //REMOVENDO ATRIBUTO readOnly!!!!
        document.getElementById("treatment").getAttribute("readOnly");
        document.getElementById("code").getAttribute("readonly"); 
        document.getElementById("name").getAttribute("readonly");
        document.getElementById("rate").getAttribute("readonly");
        document.getElementById("birth").getAttribute("readonly");
        document.getElementById("parent").getAttribute("readonly");
        document.getElementById("note").getAttribute("readonly");
    }

    return (
        <div className="App">
            <header className="App-header">
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <nav class="navbar navbar-light bg-light">
                    <Link to="/">
                        <button type="button" class="btn btn-primary">Voltar</button>
                    </Link>
                    <h5 class="navbar-brand float-center">Crianças</h5>
                    <h1> </h1>
                </nav>
            </header>
        
            <body>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8" crossorigin="anonymous"></script>

                <div class="backgroud-Kids float-center">

                    <form class="form-Kids fit-content">
                        <div class="chip">
                            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Person" width="96" height="96"></img>
                            Crianças
                        </div>
                        <Link to="/addKid">
                            <button type="submit" class="btn btn-outline-primary my-2 my-sm-0 ">+</button>
                        </Link>
                        <div class="form-group-tb">
                            <div class="form-row" text-align="center">
                                <table class="table table-responsive table-selectable-multiple" float="auto">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>id</th>
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
                                    
                                    {list.map((kid) => {
                                    return (
                                        <tbody>
                                            <tr id="rows" class="tr" padding="checkbox">
                                                <td><input type="checkbox"/></td>
                                                <td class="fit-content">{kid.id}</td>
                                                
                                                <td>
                                                    <input id="treatment" 
                                                    class="input" 
                                                    type="text" 
                                                    defaultValue={kid.treatment} 
                                                    onChange={(e) => setTreatment(e.target.value)} 
                                                    readOnly/>
                                                </td>

                                                <td>
                                                    <input id="code" 
                                                    class="input" 
                                                    type="text" 
                                                    defaultValue={kid.code} 
                                                    onChange={(e) => setCode(e.target.value)} 
                                                    readOnly/>
                                                </td>

                                                <td>
                                                    <input id="name" 
                                                    class="input" 
                                                    type="text" 
                                                    defaultValue={kid.name} 
                                                    onChange={(e) => setName(e.target.value)} 
                                                    readOnly/>
                                                </td>

                                                <td>
                                                    <input id="rate" 
                                                    class="input" type="text" 
                                                    defaultValue={kid.rate} 
                                                    onChange={(e) => setRate(e.target.value)} 
                                                    readOnly/>
                                                </td>

                                                <td>
                                                    <input id="birth" 
                                                    class="input" 
                                                    type="text" 
                                                    defaultValue={kid.birth} 
                                                    onChange={(e) => setBirth(e.target.value)} 
                                                    readOnly/>
                                                </td>

                                                <td>
                                                    <input id="parent" 
                                                    class="input" 
                                                    type="text" 
                                                    defaultValue={kid.parent} 
                                                    onChange={(e) => setParent(e.target.value)} 
                                                    readOnly/>
                                                </td>

                                                <td>
                                                    <input id="note" 
                                                    class="input" 
                                                    type="text" 
                                                    defaultValue={kid.note} 
                                                    onChange={(e) => setNote(e.target.value)} 
                                                    readOnly/>
                                                </td>

                                                <td>
                                                    <button class="btn btn-sm btn-success d-inline-block mr-1" onClick={(e) => {e.preventDefault(); tagInputs()}}>
                                                        <i class="fas fa-edit"></i>       
                                                    </button>
                                                    <button class="btn btn-sm btn-success d-inline-block mr-1" onClick ={(e) => {e.preventDefault(); updateKid(kid.id); tagInputs2()}}>
                                                        <i class="fas fa-save"></i>       
                                                    </button>
                                                    <button class="btn btn-sm btn-danger d-inline-block" onClick={(e) => {e.preventDefault(); deleteKid(kid.id)}}>
                                                        <i class="fas fa-trash-alt"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    );
                                    })}
                                </table>          
                           </div>
                        </div>
                    </form>
                </div>
            </body>
        </div>
    );
}

export default App;