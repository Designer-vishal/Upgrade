import React from 'react';
import productsData from './productdata';
import ProductsCard from './productscard';
const Product = ()=>{
    return(
        <>            
            <div className="products-row">
            {
                productsData.map((product,index)=>{
                    return(
                        <ProductsCard key={index} productData={product} />
                    )
                })
            }
            </div>
        </>
    )
}
export default Product;