const ProductsCard = (productData) =>{
    const data = productData.productData;    

    // const [cartItem, setCartItem] = useState([]);
    // console.log(data);
    // const addToCart = (product) =>{

    //     setCartItem([...cartItem, product]);
    // };
    
    return(
        <>
            <div className="product-card">
                <img
                    src={data.image}
                    alt={data.name}
                    className="product-image"
                />
                <div className="product-content">
                    <h2 className="product-title">{data.title}</h2>
                    <p className="product-price">{data.price}</p>
                    <p className="product-stock">Stock: {data.stock}</p>
                    <p className="product-rating">⭐ {data.rating}</p>
                    <button className="buy-btn" type="button" disabled={data.stock === 0}>
                        {
                            data.stock > 0 ? "Add to Cart" : "Out Of Stock"
                        }
                    </button>
                </div>
            </div>
        </>
    )
}
export default ProductsCard;