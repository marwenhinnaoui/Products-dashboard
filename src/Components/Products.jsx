import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import tets from '../assets/image.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
class Products extends Component{
    
    constructor(props)
    {
        super(props)
        this.state ={
            Data:[],
            show:true,
        }
    }
    componentDidMount()
    {
        const axios = require('axios').default;
        axios.get("https://app-crudmemlk.herokuapp.com/api/fullProdApi").then((response)=>
        {
            this.setState({Data : response.data})
        })
    }
    deleteProduct=(Id)=>{
        const axios = require('axios').default;
        axios.delete("https://app-crudmemlk.herokuapp.com/api/deleteprod/"+Id).then((response)=>
        {
            if(response.data !=null ){
                this.setState({"show":false})
                setTimeout(() => {
                    
                    this.setState({"show":true})
                }, 10);
                this.setState({
                    Data: this.state.Data.filter(Data => Data.id !== Id) 
                })
            }
        })
    }


    
    render(){
        return(
            this.state.Data.map((Product)=>{
                    return (
                    <div className="p-2 col-3">
                        <div className="Product  " style={{display:this.state.show ? "flex" : "none"}}>
                        <div className="Image">
                            <button onClick={this.deleteProduct.bind(this, Product.id)} className="btn btn-danger  DeleteButton">
                            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                            </button>
                            <Link
                                style={{ textDecoration: "none", color: "white" }}
                                to={`/edit/${Product.id}`}
                            >
                            <button className="btn btn-primary EditButton">
                                <FontAwesomeIcon
                                icon={faPenToSquare}
                                ></FontAwesomeIcon>
                            </button>
                            </Link>

                            <img className="" src={tets} alt="" />
                        </div>
                        <h3>{Product.name}</h3>
                        <p>{Product.brand}</p>
                        <p>{Product.madein}</p>
                        <p>{Product.price}</p>


                    </div>
                  </div>
                );
            })
        );
    }
}

export default Products;