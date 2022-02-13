import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faGrid } from '@fortawesome/free-solid-svg-icons'
class Sidebar extends Component{
    render(){
        return(
            <div className='Sidebar text-light '>
                <h2 className='p-3'><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> <span className='ms-1'>Dashboard</span></h2>
                <ul>
                    <Link style={{textDecoration:'none', }} to="/">
                        <li>
                            <p className='fs-5 text-light'><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> <span className='ms-1'>Products</span></p>
                        </li>
                    </Link>
                    <Link style={{textDecoration:'none'}} to="/add">
                        <li>
                            <p className='fs-5 text-light'><FontAwesomeIcon icon={faCirclePlus}></FontAwesomeIcon> <span className='ms-1'>Add product</span></p>
                        </li>
                    </Link>

                </ul>
            </div>
        );
    }
}

export default Sidebar;