import React,{useEffect,useState} from 'react';
import ProductCard from './ProductCard';
const Sunglasses =()=>{
const [products, setProduct] =useState([]);
const[loading,setloading]=useState(true);


//Fetch products in the "Sunglasses" category
useEffect (()=>{
    fetch('https://dummyjson.com/products/category/Sunglasses')
    .then((res)=>res.json())
    .then((data)=>{
        setProduct(data.products);//Save the products
        setLoading(false);//Turn off loading
    

    })
    .catch((error)=>{
        console.error('Error fetching the Sunglasses products:,error');
        
    });
},[]);
if (loading ) return <p>Loading Sunglasses products.....</p>;
retrun (
    <div>
    <div class="allcomponent-styles">
        <h2>Sunglasses</h2>
        {/*Loop through products and display each one */}
        {products.map((products)=>(
            <ProductCard key={product.id } product={product}/>

        ))
        }
    </div>
    </div>
);
};

export default Sunglasses;