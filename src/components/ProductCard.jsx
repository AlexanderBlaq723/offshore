import React from "react";

//Component to display a single product
const ProductCard =({product}) => {
    return(
        <div class="productcard">

            //Product Image
            <img src={product.thumbnail} alt={product.title} width="100%" height="auto" />

//Product name and Price
<h4>{product.title}</h4>
<p>${product.price}</p>

        </div>
    );
};
export default ProductCard;