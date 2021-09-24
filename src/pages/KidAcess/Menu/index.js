import { Link } from 'react-router-dom'
import './style.css';

function App() {

    return (
        <div className="App">
           
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
                        
                            <Link to="/TaskImgWords">
                                <button type="submit" class="btn-kid btn-primary btn-lg btn-block float-center">Tarefa</button>
                            </Link>
                            
                            
                            
                            
                        </div>

                    </form>

                </div>

            </body>

        </div>

    );
}

export default App;
