import React, {useState} from 'react';

import Product from './storeProduct';
import Form from './form'
import './style.css';

const PropS = ()=>{
    return(
        <>
            <div className="container">
                <h2 className="text-2xl font-bold text-white">Product Form</h2>
                <Form/>
        
                <hr /> 
                <Product/>
                <hr />
            </div>
        </>
    )
}
export default PropS;