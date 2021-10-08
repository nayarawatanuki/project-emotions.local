import React, { Component } from "react";
import { Link } from 'react-router-dom'

import GlobalStyle from '../.././../styles/global';
import { App, Container, Content } from './styles';
class PsycAcess extends Component {
    render() {
        return (
            <App>
                <nav className="navbar navbar-light bg-light">
                    <h4 className="navbar float-center">HOME</h4>
                    <h1> </h1>
                </nav>
            
                <Container>
                    <Content>
                        <form> 
                            <h1>Controles</h1>
                        
                            <Link to="/Kids">
                                <button type="submit" className="button button-info btn-lg btn-block float-center">Crianças</button>
                            </Link>

                            <Link to="/Activities">
                                <button type="submit" className="button button-info btn-lg btn-block float-center">Atividades</button>
                            </Link>
                        </form>
                    </Content>
                    <GlobalStyle />
                </Container>
            </App>                
        )
    }
}
export default PsycAcess;