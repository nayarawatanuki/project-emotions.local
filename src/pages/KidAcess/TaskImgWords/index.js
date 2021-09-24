import React from 'react';
import { Link } from 'react-router-dom'
import Draggable from 'react-draggable';
import './style.css';

function App() {

  function allowDrop(e) {
    e.preventDefault();
  }

  function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
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
       
        <div class="backgroud-TaskImgWords float-center">
          
          <form class="form-TaskImgWords" >            
            <div class="form-row">
              
            </div>           

            <div class="form-infoKid float-center">
              
              <div align="center">
                <figure>
                  <img  ondrop={(e) => {drop(e)}} ondragover={(e) => {allowDrop(e)}} src="https://rollingstone.uol.com.br/media/_versions/legacy/2015/img-1031213-ira-em-estado-bruto_widemd.jpg" alt="Hulk" />
                  
                </figure>
              </div>

              
                <div  >
                  <Draggable>
                    <label id="word1" name="triste" value="TRISTE">TRISTE</label>
                  </Draggable>
                </div>  

                <div  >
                  <label id="word2" name="feliz" value="FELIZ">FELIZ</label>
                </div>

                <div  >
                  <label id="word3" name="bravo" value="BRAVO">BRAVO</label>
                  
                </div>
              
            </div>

          </form>

        </div>

      </body>

    </div>
  );
}

export default App;