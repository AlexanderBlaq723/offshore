import React,{useEffect,useState} from 'react';
import ProductCard from './ProductCard';
const MenWatches =()=>{
const [products, setProduct] =useState([]);
const[loading,setloading]=useState(true);


//Fetch products in the "MenWatches" category
useEffect (()=>{
    fetch('https://dummyjson.com/products/category/MenWatches')
    .then((res)=>res.json())
    .then((data)=>{
        setProduct(data.products);//Save the products
        setLoading(false);//Turn off loading
    

    })
    .catch((error)=>{
        console.error('Error fetching the MenWatches products:,error');
        
    });
},[]);
if (loading ) return <p>Loading MenWatches products.....</p>;
retrun (
    <div>
    <div class="allcomponent-styles">
        <h2>MenWatches</h2>
        {/*Loop through products and display each one */}
        {products.map((products)=>(
            <ProductCard key={product.id } product={product}/>

        ))
        }
    </div>
    </div>
);
};

export default MenWatches;