import React,{useEffect,useState} from 'react';
import ProductCard from './ProductCard';
const MotorCyles =()=>{
const [products, setProduct] =useState([]);
const[loading,setloading]=useState(true);


//Fetch products in the "MotorCycle" category
useEffect (()=>{
    fetch('https://dummyjson.com/products/category/MotorCycle')
    .then((res)=>res.json())
    .then((data)=>{
        setProduct(data.products);//Save the products
        setLoading(false);//Turn off loading
    

    })
    .catch((error)=>{
        console.error('Error fetching the MotorCycle products:,error');
        
    });
},[]);
if (loading ) return <p>Loading MotorCycle products.....</p>;
retrun (
    <div>
    <div class="allcomponent-styles">
        <h2>MotorCycle</h2>
        {/*Loop through products and display each one */}
        {products.map((products)=>(
            <ProductCard key={product.id } product={product}/>

        ))
        }
    </div>
    </div>
);
};

export default MotorCycle;