import React, { Component } from "react";
import { Link } from 'react-router-dom'
import './style.css';

class PrincipalMenu extends Component {
    render() {

        return (
            <div className="App" >
            
                <header className="App-header">
                    <nav class="navbar navbar-light bg-light">
                        <h5 class="navbar-brand float-center">Menu</h5>
                        <h1> </h1>
                    </nav>
                </header>
            
                <body>
            
                    <div class="backgroud-menu float-center">
                        
                        <form class="form-menu">
                            
                            <div class="form-info float-center">

                                <h1>Por onde voce quer começar?</h1>
                            
                                <Link to="/KidAcess">
                                    <button type="submit" class="btn-kid btn-primary btn-lg btn-block float-center">Acesso Criança</button>
                                </Link>
                                
                                
                                <Link to="/PsycAcess">
                                    <button type="submit" class="btn-act btn-primary btn-lg btn-block float-center">Acesso Psicólogo(a)</button>
                                </Link>
                                
                                
                            </div>

                        </form>

                    </div>

                </body>

            </div>

        );
    }
}
export default PrincipalMenu;
