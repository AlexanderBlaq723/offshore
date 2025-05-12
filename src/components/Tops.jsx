import React,{useEffect,useState} from 'react';
import ProductCard from './ProductCard';
const Tops =()=>{
const [products, setProduct] =useState([]);
const[loading,setloading]=useState(true);


//Fetch products in the "Tops" category
useEffect (()=>{
    fetch('https://dummyjson.com/products/category/Tops')
    .then((res)=>res.json())
    .then((data)=>{
        setProduct(data.products);//Save the products
        setLoading(false);//Turn off loading
    

    })
    .catch((error)=>{
        console.error('Error fetching the Tops products:,error');
        
    });
},[]);
if (loading ) return <p>Loading Tops products.....</p>;
retrun (
    <div>
    <div class="allcomponent-styles">
        <h2>Tops</h2>
        {/*Loop through products and display each one */}
        {products.map((products)=>(
            <ProductCard key={product.id } product={product}/>

        ))
        }
    </div>
    </div>
);
};

export default Tops;