import React,{useEffect,useState} from 'react';
import ProductCard from './ProductCard';
const Frangrances =()=>{
const [products, setProduct] =useState([]);
const[loading,setloading]=useState(true);


//Fetch products in the "Furniture" category
useEffect (()=>{
    fetch('https://dummyjson.com/products/category/Furniture')
    .then((res)=>res.json())
    .then((data)=>{
        setProduct(data.products);//Save the products
        setLoading(false);//Turn off loading
    

    })
    .catch((error)=>{
        console.error('Error fetching the Furniture products:,error');
        
    });
},[]);
if (loading ) return <p>Loading Furniture products.....</p>;
retrun (
    <div>
    <div class="allcomponent-styles">
        <h2>Furniture</h2>
        {/*Loop through products and display each one */}
        {products.map((products)=>(
            <ProductCard key={product.id } product={product}/>

        ))
        }
    </div>
    </div>
);
};

export default Furniture;