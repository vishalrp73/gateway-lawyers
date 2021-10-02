import './core.css';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Banner from './banner';

import Home from '../../pages/home';
import Services from '../../pages/services';
import OurProfile from '../../pages/our_prof';
import Contact from '../../pages/contact';
import GatewayAccounting from '../../pages/gateAcc';

import { Menu, IconButton } from '@material-ui/core';
import MenuIconRounded from '@material-ui/icons/MenuRounded';
import { useState } from 'react';


const Core = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div className = 'core-wrapper'>
            
            <Banner />


            <Router>
            <div className = 'navigation-wrapper' id = 'menu-desktop' >

                    <NavLink exact to = '/' className = 'nav-btn' activeClassName = 'nav-btn-active'>
                        <div className = 'nav-container'>
                            <h5 className = 'nav-text' id = 'resp_nav-text'>Home</h5>
                        </div>
                    </NavLink>

                    <NavLink to = '/services.js' className = 'nav-btn' activeClassName = 'nav-btn-active'>
                        <div className = 'nav-container'>
                            <h5 className = 'nav-text' id = 'resp_nav-text'>Services</h5>
                        </div>
                    </NavLink>

                    <NavLink to = '/our_prof.js' className = 'nav-btn' activeClassName = 'nav-btn-active'>
                        <div className = 'nav-container'>
                            <h5 className = 'nav-text' id = 'resp_nav-text'>Our Profile</h5>
                        </div>
                    </NavLink>

                    <NavLink to = '/contact.js' className = 'nav-btn' activeClassName = 'nav-btn-active'>
                        <div className = 'nav-container'>
                            <h5 className = 'nav-text' id = 'resp_nav-text'>Contact</h5>
                        </div>
                    </NavLink>

                    <NavLink to = '/gateAcc.js' className = 'nav-btn' activeClassName = 'nav-btn-ga-active'>
                        <div className = 'nav-container'>
                            <h5 className = 'nav-text' id = 'resp_nav-text'>Gateway Accounting</h5>
                        </div>
                    </NavLink>

            </div>


            <div className = 'hamburger-wrap' id = 'menu__bar'>

                <IconButton onClick = {handleClick} >
                    <MenuIconRounded
                        fontSize = 'large'
                        className = 'menu-icon'
                        style = {{color: 'white'}}
                    />
                </IconButton>

                <Menu id = 'mui-menu' anchorEl = {anchorEl} keepMounted open = {open} onClose = {handleClose} >

                    <div className = 'mui-nav-wrap'>

                        <div className = 'menu-item-wrap' >
                            <NavLink exact to = '/' className = 'mui-nav-link' activeClassName = 'mui-link-active' >
                                    <h5 className = 'mui-nav-text'>HOME</h5>
                            </NavLink>
                        </div>

                        <div className = 'menu-item-wrap' >
                            <NavLink to = '/services.js' className = 'mui-nav-link' activeClassName = 'mui-link-active' >
                                    <h5 className = 'mui-nav-text'>SERVICES</h5>
                            </NavLink>
                        </div>

                        <div className = 'menu-item-wrap' >
                            <NavLink to = '/our_prof.js' className = 'mui-nav-link' activeClassName = 'mui-link-active' >
                                    <h5 className = 'mui-nav-text'>OUR PROFILE</h5>
                            </NavLink>
                        </div>

                        <div className = 'menu-item-wrap' >
                            <NavLink to = '/contact.js' className = 'mui-nav-link' activeClassName = 'mui-link-active'>
                                    <h5 className = 'mui-nav-text'>CONTACT</h5>
                            </NavLink>
                        </div>

                        <div className = 'menu-item-wrap' >
                            <NavLink to = '/gateAcc.js' className = 'mui-nav-link' activeClassName = 'mui-link-active' >
                                    <h5 className = 'mui-nav-text'>GATEWAY ACCOUNTING</h5>
                            </NavLink>
                        </div>
                    </div>

                </Menu>

            </div>


            <div className = 'content-wrapper'>

                <Switch>

                    <Route exact path = '/' component = {Home} />
                    <Route exact path = '/services.js' component = {Services} />
                    <Route exact path = '/our_prof.js' component = {OurProfile} />
                    <Route exact path = '/contact.js' component = {Contact} />
                    <Route exact path = '/gateAcc.js' component = {GatewayAccounting} />

                </Switch>

            </div>




                </Router>
                

            

        </div>
    )
}

export default Core;