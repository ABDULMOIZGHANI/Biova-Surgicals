import React, { useEffect, useState } from 'react'
import axios from "axios"
import Button from './Button';
import Product_card from './Product_card';

const FeaturedProducts = () => {
    const [products, setProduct] = useState([]);

    console.log(products);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/product_details")
            .then((result) => {
                setProduct(result.data);
            })
            .catch((err) => console.log("ERROR", err));
    }, []);


    return (
        <div className='mt-[70px]'>
            <p className='text-[#4F7D7B] text-center lato text-[20px]'>Highly Affordable Products</p>
            <h1 className='text-[#00605f] playfair font-bold text-[30px] md:text-[46px] text-center tracking-[1.5px] mt-[20px]'>Featured Products</h1>

            <div className='flex w-[95%] m-auto gap-[20px] mt-[50px] flex-wrap'>
                {products.filter(feature_products => feature_products.feature_product === "true").map((product) => (
                    <Product_card product={product} key={product._id} />))}
            </div>
        </div>
    )
}

export default FeaturedProducts
