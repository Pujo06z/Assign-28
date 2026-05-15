import React from "react";

function Product({id,name,price,inStock,onAddtoCart}){
return(
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
    <h2>Product Name: {name}</h2>
    <p>Price {price} VNĐ</p>
    {!inStock &&  <p style={{color:"red"}}>Hết Hàng</p>}
    <button 
    onClick={()=>onAddtoCart(id)}
    disabled={!inStock}
    >Add to cart</button>
    </div>
)

}
function ProductList({products,onAddtoCart}){
return(
    <div>
    {products.map(product => ( 
        <Product 
          id={product.id}
          name={product.name}
          price={product.price}
          inStock={product.inStock}
          onAddtoCart={onAddtoCart} 
        />
    ))}
    </div>
)
}
export default ProductList;