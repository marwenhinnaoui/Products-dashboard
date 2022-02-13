import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Products from './Products';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
class Add extends Component{
    render(){
        return(
            <div className='Add'>
        <Form className="d-flex flex-column justify-content-center align-items-center">
    <Form.Group className="mb-3 w-50" controlId="formBasicText">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
    </Form.Group>

    <Form.Group className="mb-3 w-50" controlId="formBasicText">
        <Form.Label>Brand</Form.Label>
        <Form.Control type="text" placeholder="Brand" />
    </Form.Group>
    <Form.Group className="mb-3 w-50" controlId="formBasicText">
        <Form.Label>Made in</Form.Label>
        <Form.Control type="text" placeholder="Made in" />
    </Form.Group>
    <Form.Group className="mb-3 w-50" controlId="formBasicText">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Price" />
    </Form.Group>
    <Button className='w-50' variant="primary">
        Add
    </Button>
    </Form>
    </div>
        );
    }
}

export default Add;