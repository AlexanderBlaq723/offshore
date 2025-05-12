import React,{useEffect,useState} from 'react';
import ProductCard from './ProductCard';
const Vehicles =()=>{
const [products, setProduct] =useState([]);
const[loading,setloading]=useState(true);


//Fetch products in the "Vehicles" category
useEffect (()=>{
    fetch('https://dummyjson.com/products/category/Vehicles')
    .then((res)=>res.json())
    .then((data)=>{
        setProduct(data.products);//Save the products
        setLoading(false);//Turn off loading
    

    })
    .catch((error)=>{
        console.error('Error fetching the Vehicles products:,error');
        
    });
},[]);
if (loading ) return <p>Loading Vehicles products.....</p>;
retrun (
    <div>
    <div class="allcomponent-styles">
        <h2>Vehicles</h2>
        {/*Loop through products and display each one */}
        {products.map((products)=>(
            <ProductCard key={product.id } product={product}/>

        ))
        }
    </div>
    </div>
);
};

export default Vehicles;