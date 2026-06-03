import React, {useState,useEffect} from 'react';

import Product from './storeProduct';
import Form from './form'
import './style.css';

const PropS = ()=>{
    const [Data,setData] = useState([]);
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=> res.json())
        .then((data)=> setData(data))
    },[]);

    return(
        <>        
            <div className="container">
                <h2 className="text-2xl font-bold text-white">Data from API</h2>
                <div className="users-wrapper">
                    {
                        Data.map((item,index)=>{
                            return(                            
                                <div className="user-card" key={index}>

                                    <div className="card-top">
                                        <div className="avatar">{item.name.charAt(0)}</div>

                                        <div className="user-info">
                                            <h3>{item.name}</h3>
                                            <span>{item.username}</span>
                                        </div>
                                    </div>

                                    <div className="company-badge">
                                        {item.company.name}
                                    </div>

                                    <div className="card-body">

                                        <div className="info-row">
                                            <label>Email</label>
                                            <p>{item.email}</p>
                                        </div>

                                        <div className="info-row">
                                            <label>Phone</label>
                                            <p>{item.phone}</p>
                                        </div>



                                    </div>

                                    <div className="card-footer">
                                        <button>View Profile</button>
                                    </div>

                                </div>
                            )                      
                        })
                    }     
                </div>           
                <hr /> 
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