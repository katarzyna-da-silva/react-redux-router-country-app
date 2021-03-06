import React from 'react';
import { Link } from 'react-router';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
// routing // zdefiniowanie sciezek i podpiecie komponentow...
//boostrap
// 4 komponenty link
const Navigation = props => (
    <div>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">Countries.js</Link>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><Link to="/countries">Countries</Link></li>
                        <li><Link to="/continents">Continents</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container-fluid">
            {props.children}
        </div>
    </div>
);
//  elementy drzewa DOM, które będą dziećmi komponentu <Navigation> 
//zostaną wyrenderowane wewnątrz <div className='container-fluid'></div>.  => props children...
export default Navigation;
