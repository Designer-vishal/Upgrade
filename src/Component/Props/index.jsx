import React, {useState} from 'react';

import Product from './storeProduct';
import './style.css';

const PropS = ()=>{
    const [welcomeName, setWelcomeName] = useState("");
    return(
        <>
            <div className="container">
                <input type="text" placeholder="welcome Name" className="search-input" onChange={(e)=>{setWelcomeName(e.target.value)}}/> 
                <h1>
                {
                    welcomeName ? `welcome ${welcomeName}` : "welcome Guest"
                }
                </h1>
                <hr /> 
                <Product/>
                <hr />
            </div>
        </>
    )
}
export default PropS;