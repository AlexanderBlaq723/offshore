import React,{useEffect,useState} from 'react';
import ProductCard from './ProductCard';
const SmartPhones =()=>{
const [products, setProduct] =useState([]);
const[loading,setloading]=useState(true);


//Fetch products in the "SmartPhones" category
useEffect (()=>{
    fetch('https://dummyjson.com/products/category/SmartPhones')
    .then((res)=>res.json())
    .then((data)=>{
        setProduct(data.products);//Save the products
        setLoading(false);//Turn off loading
    

    })
    .catch((error)=>{
        console.error('Error fetching the SmartPhones products:,error');
        
    });
},[]);
if (loading ) return <p>Loading SmartPhones products.....</p>;
retrun (
    <div>
    <div class="allcomponent-styles">
        <h2>SmartPhones</h2>
        {/*Loop through products and display each one */}
        {products.map((products)=>(
            <ProductCard key={product.id } product={product}/>

        ))
        }
    </div>
    </div>
);
};

export default SmartPhones;