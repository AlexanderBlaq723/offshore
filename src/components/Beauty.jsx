import React,{useEffect,useState} from 'react';
import ProductCard from './ProductCard';
const Beauty =()=>{
const [products, setProduct] =useState([]);
const[loading,setloading]=useState(true);


//Fetch products in the "beauty" category
useEffect (()=>{
    fetch('https://dummyjson.com/products/category/beauty')
    .then((res)=>res.json())
    .then((data)=>{
        setProduct(data.products);//Save the products
        setLoading(false);//Turn off loading
    

    })
    .catch((error)=>{
        console.error('Error fetching the Beauty products:,error');
        
    });
},[]);
if (loading ) return <p>Loading beauty products.....</p>;
retrun (
    <div>
    <div class="allcomponent-styles">
        <h2>Beauty</h2>
        {/*Loop through products and display each one */}
        {products.map((products)=>(
            <ProductCard key={product.id } product={product}/>

        ))
        }
    </div>
    </div>
);
};

export default Beauty;