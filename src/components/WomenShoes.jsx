import React,{useEffect,useState} from 'react';
import ProductCard from './ProductCard';
const  WomenShoes=()=>{
const [products, setProduct] =useState([]);
const[loading,setloading]=useState(true);


//Fetch products in the " WomenShoes" category
useEffect (()=>{
    fetch('https://dummyjson.com/products/category/WomenShoes')
    .then((res)=>res.json())
    .then((data)=>{
        setProduct(data.products);//Save the products
        setLoading(false);//Turn off loading
    

    })
    .catch((error)=>{
        console.error('Error fetching the  WomenShoesproducts:,error');
        
    });
},[]);
if (loading ) return <p>Loading  WomenShoes products.....</p>;
retrun (
    <div>
    <div class="allcomponent-styles">
        <h2> WomenShoes</h2>
        {/*Loop through products and display each one */}
        {products.map((products)=>(
            <ProductCard key={product.id } product={product}/>

        ))
        }
    </div>
    </div>
);
};

export default WomenShoes;