import React,{useEffect,useState} from 'react';
import ProductCard from './ProductCard';
const Tablets =()=>{
const [products, setProduct] =useState([]);
const[loading,setloading]=useState(true);


//Fetch products in the "Tablets" category
useEffect (()=>{
    fetch('https://dummyjson.com/products/category/Tablets')
    .then((res)=>res.json())
    .then((data)=>{
        setProduct(data.products);//Save the products
        setLoading(false);//Turn off loading
    

    })
    .catch((error)=>{
        console.error('Error fetching the Tablets products:,error');
        
    });
},[]);
if (loading ) return <p>Loading Tablets products.....</p>;
retrun (
    <div>
    <div class="allcomponent-styles">
        <h2>Tablets</h2>
        {/*Loop through products and display each one */}
        {products.map((products)=>(
            <ProductCard key={product.id } product={product}/>

        ))
        }
    </div>
    </div>
);
};

export default Tablets;