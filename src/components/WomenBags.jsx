import React,{useEffect,useState} from 'react';
import ProductCard from './ProductCard';
const WomenBags =()=>{
const [products, setProduct] =useState([]);
const[loading,setloading]=useState(true);


//Fetch products in the "Vehicles" category
useEffect (()=>{
    fetch('https://dummyjson.com/products/category/WomenBags')
    .then((res)=>res.json())
    .then((data)=>{
        setProduct(data.products);//Save the products
        setLoading(false);//Turn off loading
    

    })
    .catch((error)=>{
        console.error('Error fetching the WomenBags products:,error');
        
    });
},[]);
if (loading ) return <p>Loading WomenBags products.....</p>;
retrun (
    <div>
    <div class="allcomponent-styles">
        <h2>WomenBags</h2>
        {/*Loop through products and display each one */}
        {products.map((products)=>(
            <ProductCard key={product.id } product={product}/>

        ))
        }
    </div>
    </div>
);
};

export default WomenBags;