import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Products from './Products';

class Content extends Component{
    render(){
        return(
            <div className='Content  row justify-content-evenly'>
                <Products />
            </div>
        );
    }
}

export default Content;