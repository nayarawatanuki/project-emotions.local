import React, { Component } from "react";
import { Link } from 'react-router-dom'

import GlobalStyle from '../../../styles/global';
import { App, Container, Content } from './styles';

class TaskImgWords extends Component {
  render() {
    function allowDrop(e) {
      e.preventDefault();
    }
  
    function drag(e) {
      e.dataTransfer.setData("text", e.target.id);
    }
  
    function drop(e) {
      e.preventDefault();
      var data = e.dataTransfer.getData("text");
      e.target.appendChild(document.getElementById(data));
    }
      return (
          <App>
              <nav class="navbar navbar-light bg-light">
                <Link to="/KidAcess">
                  <button type="button" class="button button-danger">SAIR</button>
                </Link>
                <h4 class="navbar float-center">Associando palavras com imagens</h4>
              </nav>
          
              <Container>
                  <Content>
                    <form> 
                        <div>
                          <img alt="Hulk" display="center"
                            onDragOver={(e)=> allowDrop(e)} 
                            onDrop={(e)=> drop(e)} align="center"  
                            src="https://rollingstone.uol.com.br/media/_versions/legacy/2015/img-1031213-ira-em-estado-bruto_widemd.jpg" />
                        </div>
          
                        
                        <div class="div-label" >
                          <div>
                              <label id="emotion1" name="emotion1" 
                                value="TRISTE"
                                draggable={true} 
                                onDragStart={(e)=> drag(e)}
                                onDragEnd={(e)=> {window.alert('Ops, tente outra vez.') }}>TRISTE
                              </label>
                          </div>  
        
                          <div>
                            <label id="emotion2" name="emotion2" 
                              value="FELIZ" 
                              draggable={true} onDragStart={(e)=> drag(e)}
                              onDragEnd={(e)=> window.alert('Ops, tente outra vez.')}>FELIZ
                            </label>
                          </div>
        
                          <div>
                            <label id="emotion3" name="emotion3" 
                              value="BRAVO"
                              draggable={true} onDragStart={(e)=> drag(e)} 
                              onDragEnd={(e)=> window.alert('PARABÉNS!!!')}>BRAVO
                            </label>
                          </div>
                        </div>
                      
                    </form>
                  </Content>
                  <GlobalStyle />
              </Container>
          </App>                
      )
  }
}
export default TaskImgWords;