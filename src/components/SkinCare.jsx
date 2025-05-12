import React,{useEffect,useState} from 'react';
import ProductCard from './ProductCard';
const SkinCare =()=>{
const [products, setProduct] =useState([]);
const[loading,setloading]=useState(true);


//Fetch products in the "SkinCare" category
useEffect (()=>{
    fetch('https://dummyjson.com/products/category/SkinCare')
    .then((res)=>res.json())
    .then((data)=>{
        setProduct(data.products);//Save the products
        setLoading(false);//Turn off loading
    

    })
    .catch((error)=>{
        console.error('Error fetching the SkinCare products:,error');
        
    });
},[]);
if (loading ) return <p>Loading SkinCare products.....</p>;
retrun (
    <div>
    <div class="allcomponent-styles">
        <h2>SkinCare</h2>
        {/*Loop through products and display each one */}
        {products.map((products)=>(
            <ProductCard key={product.id } product={product}/>

        ))
        }
    </div>
    </div>
);
};

export default SkinCare;