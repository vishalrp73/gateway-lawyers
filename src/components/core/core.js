import './core.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Banner from './banner';

import Home from '../../pages/home';
import Services from '../../pages/services';
import OurProfile from '../../pages/our_prof';
import Contact from '../../pages/contact';
import GatewayAccounting from '../../pages/gateAcc';


const Core = () => {
    return (
        <div className = 'core-wrapper'>
            
            <Banner />


            <Router>
            <div className = 'navigation-wrapper'>

                

                    <NavLink exact to = '/' className = 'nav-btn' activeClassName = 'nav-btn-active'>
                        <div className = 'nav-container'>
                            <h5 className = 'nav-text'>Home</h5>
                        </div>
                    </NavLink>

                    <NavLink to = '/services.js' className = 'nav-btn' activeClassName = 'nav-btn-active'>
                        <div className = 'nav-container'>
                            <h5 className = 'nav-text'>Services</h5>
                        </div>
                    </NavLink>

                    <NavLink to = '/our_prof.js' className = 'nav-btn' activeClassName = 'nav-btn-active'>
                        <div className = 'nav-container'>
                            <h5 className = 'nav-text'>Our Profile</h5>
                        </div>
                    </NavLink>

                    <NavLink to = '/contact.js' className = 'nav-btn' activeClassName = 'nav-btn-active'>
                        <div className = 'nav-container'>
                            <h5 className = 'nav-text'>Contact</h5>
                        </div>
                    </NavLink>

                    <NavLink to = '/gateAcc.js' className = 'nav-btn' activeClassName = 'nav-btn-ga-active'>
                        <div className = 'nav-container'>
                            <h5 className = 'nav-text'>Gateway Accounting</h5>
                        </div>
                    </NavLink>

            </div>


                    <div className = 'content-wrapper'>

                        <Switch>

                            <Route exact path = '/' >
                                <Home />
                            </Route>

                            <Route exact path = '/services.js'>
                                <Services />
                            </Route>

                            <Route exact path = '/our_prof.js'>
                                <OurProfile />
                            </Route>

                            <Route exact path = '/contact.js'>
                                <Contact />
                            </Route>

                            <Route exact path = '/gateAcc.js'>
                                <GatewayAccounting />
                            </Route>


                        </Switch>

                    </div>




                </Router>
                

            

        </div>
    )
}

export default Core;