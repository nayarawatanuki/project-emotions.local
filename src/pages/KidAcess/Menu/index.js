import React, { Component } from "react";
import { Link } from 'react-router-dom'

import GlobalStyle from '../../../styles/global';
import { App, Container, Content } from './styles';

class KidAcess extends Component {
    render() {
        return (
            <App>
                <nav class="navbar navbar-light bg-light">
                    <h4 class="navbar float-center">HOME</h4>
                </nav>
            
                <Container>
                    <Content>
                        <form> 
                            <h1>Vamos começar?</h1>
                        
                            <Link to="/TaskImgWords">
                                <button margin-top="2%" type="submit" class="button button-info btn-lg btn-block float-center">Tarefas</button>
                            </Link>
                        </form>
                    </Content>
                    <GlobalStyle />
                </Container>
            </App>                
        )
    }
}
export default KidAcess;