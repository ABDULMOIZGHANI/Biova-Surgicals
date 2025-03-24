import React, { useEffect, useState } from "react";
import { API_NAME } from "../constant/index.js";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addToCart } from "../features/cartSlice"; // Import addToCart action
import Button from "../components/Button.jsx";
import MainButton from "../components/MainButton.jsx";
import Product_reviews_description from "../components/Product_reviews_description.jsx";

const SingleProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState(1);

    useEffect(() => {
        axios
            .get(`${API_NAME}/api/product_details`)
            .then((result) => {
                setProducts(result.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log("ERROR", err);
                setLoading(false);
            });
    }, []);

    const decrementValue = () => {
        setValue((prevValue) => (prevValue > 1 ? prevValue - 1 : prevValue));
    };

    const incrementValue = () => {
        setValue((prevValue) => prevValue + 1);
    };

    const single_product = products.find((product) => product._id === id);

    if (loading) return <div>Loading...</div>;
    if (!single_product) return <div>Product not found</div>;

    // Function to add to cart
    const handleAddToCart = () => {
        dispatch(addToCart({ ...single_product, quantity: value }));
    };

    // Function to buy now (add to cart & navigate to cart page)
    const handleBuyNow = () => {
        dispatch(addToCart({ ...single_product, quantity: value }));
        navigate("/your-cart"); // Redirect to cart page
    };

    return (
        <div className="w-[90%] m-auto p-4">
            {/* Product Category */}
            <h3 className="text-gray-500 text-lg mb-2">{single_product.category}</h3>

            <div className="flex gap-6">
                {/* Image Gallery */}
                <div className="flex gap-[20px]">
                    <div className="flex mt-2 gap-4 flex-col">
                        {single_product.product_images.map((img, index) => (
                            <div key={index} className="bg-[#DEFDFC] rounded border w-[126px]">
                                <img
                                    src={img}
                                    alt="Product Thumbnail"
                                    className="h-[83px] rounded-lg border-gray-300 cursor-pointer block m-auto"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="bg-[#DEFDFC] w-[562px] h-fit">
                        <img
                            src={single_product.product_images[0]}
                            alt="Product"
                            className="w-[80%] object-cover block m-auto"
                        />
                    </div>
                </div>

                {/* Product Details */}
                <div className="flex flex-col gap-5">
                    <div>
                        <h1 className="text-[28px] font-bold playfair">{single_product.title}</h1>
                        <p className="text-lg mt-1 flex items-center gap-4">
                            <img src="/reviews/Stars .png" alt="" className="h-[21px]" />
                            {single_product.reviews.length} Reviews
                        </p>
                    </div>

                    <div className="mt-2">
                        <span className="text-3xl font-bold text-gray-800 cinzel">RS {single_product.price}</span>
                        <span className="text-xl text-gray-500 line-through ml-3 cinzel">
                            RS {single_product.old_price}
                        </span>

                        <div className="lato flex gap-2 items-center text-gray-500 text-[15px]">
                            <img src="/Products/Sale Icon.png" alt="" className="h-[16px]" /> Save 30% now
                        </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center space-x-2 sm:space-x-4">
                        <button
                            onClick={decrementValue}
                            className="bg-[#02BBB6] text-white px-3 sm:px-4 py-1 sm:py-2 hover:bg-[#008f8a] cursor-pointer text-[16px] sm:text-[18px] font-bold"
                        >
                            -
                        </button>
                        <span className="text-[14px] sm:text-lg">{value}</span>
                        <button
                            onClick={incrementValue}
                            className="bg-[#02BBB6] text-white px-3 sm:px-4 py-1 sm:py-2 hover:bg-[#008f8a] cursor-pointer text-[16px] sm:text-[18px] font-bold"
                        >
                            +
                        </button>
                    </div>

                    {/* Buttons */}
                    <div className="mt-4 flex gap-4">
                        <button onClick={handleBuyNow}>
                            <MainButton value="BUY NOW" />
                        </button>
                        <button onClick={handleAddToCart} className="px-6 py-3 border text-[#02BBB6] border-[#02BBB6] rounded-lg">
                            ADD TO CART
                        </button>
                    </div>

                    {/* Features */}
                    <div className="mt-4 text-gray-600 flex flex-col gap-1.5">
                        <p className="flex items-center gap-3 font-semibold text-gray-500 text-[15px]">
                            <img src="/Products/World Wide.png" alt="" className="w-[14px]" /> Free shipping worldwide
                        </p>
                        <p className="flex items-center gap-3 font-semibold text-gray-500 text-[15px]">
                            <img src="/Products/pure.png" alt="" className="w-[14px]" /> 100% pure material
                        </p>
                        <p className="flex items-center gap-3 font-semibold text-gray-500 text-[15px]">
                            <img src="/Products/Professional.png" alt="" className="w-[14px]" /> Made by professionals
                        </p>
                    </div>
                </div>
            </div>
            <Product_reviews_description single_product={single_product} />
        </div>
    );
};

export default SingleProductDetail;
