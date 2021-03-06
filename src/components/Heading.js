import React from 'react';
import { Users } from './Users';
import { Process } from './Process';
import { CreateUser } from './CreateUser';
import { Ram } from './Ram';
import { Home } from './Home';
import { Paquetes } from './Paquetes';
import { Apagar } from './apagar';
import { InfoRam } from './infoRam';
import { InfoBattery } from './infoBattery';
import { InfoCPU } from './infoCPU';
import { InfoDisk } from './infoDisk';

import { BrowserRouter as Router,Switch,Route,Link,Redirect} from 'react-router-dom';
export class Heading extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return(
          <Router>
         <div>
                <div data-aos="fade-down" className='div-barra-busqueda'>
                    <nav class="navbar navbar-expand-lg navbar-dark shadow p-3 rounded ">

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                        <li class="nav-item active">
                            <Link to="/Home" class="nav-link"> Inicio </Link>
                        </li>
                        <li class="nav-item">
                          <Link to="/users" class="nav-link"> Usuarios </Link>
                        </li>
                        <li class="nav-item">
                          <Link to="/process" class="nav-link">Procesos</Link>
                        </li>
                        <li class="nav-item">
                          <Link to="/paquetes" class="nav-link">Paquetes</Link>
                        </li>

                        </ul>
                    </div>
                    <Apagar/>
                    </nav>
                </div>


                <Switch>
              		<Route exact path="/" component={Home} />
                  <Route exact path="/home" component={Home} />
                  <Route path="/users" component={Users} />
                  <Route path="/process" component={Process} />
                  <Route path="/create_user" component={CreateUser} />
                  <Route path="/paquetes" component={Paquetes} />

                  <Route path="/infoRam" component={InfoRam} />
                  <Route path="/infoCPU" component={InfoCPU} />
                  <Route path="/infoDisk" component={InfoDisk} />
                  <Route path="/infoBattery" component={InfoBattery} />

              </Switch>
          </div>
          </Router>
        )
    }
}
