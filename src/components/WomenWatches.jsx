import React,{useEffect,useState} from 'react';
import ProductCard from './ProductCard';
const  WomenWatches=()=>{
const [products, setProduct] =useState([]);
const[loading,setloading]=useState(true);


//Fetch products in the " WomenWatches" category
useEffect (()=>{
    fetch('https://dummyjson.com/products/category/WomenWatches')
    .then((res)=>res.json())
    .then((data)=>{
        setProduct(data.products);//Save the products
        setLoading(false);//Turn off loading
    

    })
    .catch((error)=>{
        console.error('Error fetching the  WomenWatches products:,error');
        
    });
},[]);
if (loading ) return <p>Loading  WomenWatches products.....</p>;
retrun (
    <div>
    <div class="allcomponent-styles">
        <h2> WomenWatches</h2>
        {/*Loop through products and display each one */}
        {products.map((products)=>(
            <ProductCard key={product.id } product={product}/>

        ))
        }
    </div>
    </div>
);
};

export default WomenWatches;