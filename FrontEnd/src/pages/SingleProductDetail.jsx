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

            <div className="flex flex-col lg:flex-row gap-6 px-4 sm:px-6">
                {/* Image Gallery */}
                <div className="flex flex-col-reverse sm:flex-row gap-4 w-full lg:w-[55%]">
                    {/* Thumbnails */}
                    <div className="flex flex-row sm:flex-col gap-2 sm:gap-3 overflow-x-auto sm:overflow-x-visible pb-2 sm:pb-0">
                        {single_product.product_images.map((img, index) => (
                            <div
                                key={index}
                                className="bg-[#DEFDFC] rounded border w-20 sm:w-24 flex-shrink-0 sm:flex-shrink"
                            >
                                <img
                                    src={img}
                                    alt="Product Thumbnail"
                                    className="h-16 sm:h-20 w-full object-cover rounded cursor-pointer"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Main Image */}
                    <div className="bg-[#DEFDFC] rounded-lg flex-1 h-fit">
                        <img
                            src={single_product.product_images[0]}
                            alt="Product"
                            className="w-full h-auto max-h-[400px] object-contain p-4"
                        />
                    </div>
                </div>

                {/* Product Details */}
                <div className="flex flex-col gap-4 w-full lg:w-[45%]">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold playfair">{single_product.title}</h1>
                        <p className="text-base sm:text-lg mt-1 flex items-center gap-3">
                            <img src="/reviews/Stars.png" alt="" className="h-5" />
                            {single_product.reviews.length} Reviews
                        </p>
                    </div>

                    <div className="mt-2">
                        <div className="flex items-baseline gap-2">
                            <span className="text-2xl sm:text-3xl font-bold text-gray-800 cinzel">
                                RS {single_product.price}
                            </span>
                            <span className="text-lg sm:text-xl text-gray-500 line-through cinzel">
                                RS {single_product.old_price}
                            </span>
                        </div>
                        <div className="lato flex gap-2 items-center text-gray-500 text-sm sm:text-base mt-1">
                            <img src="/Products/Sale Icon.png" alt="" className="h-4" />
                            Save 30% now
                        </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-3 sm:gap-4 mt-2">
                        <span className="text-sm sm:text-base">Quantity:</span>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={decrementValue}
                                className="bg-[#02BBB6] text-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-[#008f8a] rounded"
                            >
                                -
                            </button>
                            <span className="w-8 text-center">{value}</span>
                            <button
                                onClick={incrementValue}
                                className="bg-[#02BBB6] text-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-[#008f8a] rounded"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-4 flex flex-col sm:flex-row gap-3">
                        <button
                            onClick={handleBuyNow}
                            className="w-full sm:w-auto"
                        >
                            <MainButton value="BUY NOW" fullWidth />
                        </button>
                        <button
                            onClick={handleAddToCart}
                            className="px-6 py-3 border text-[#02BBB6] border-[#02BBB6] rounded-lg hover:bg-[#DEFDFC] transition-colors w-full sm:w-auto"
                        >
                            ADD TO CART
                        </button>
                    </div>

                    {/* Features */}
                    <div className="mt-4 text-gray-600 flex flex-col gap-2">
                        <p className="flex items-center gap-3 text-sm sm:text-base">
                            <img src="/Products/World Wide.png" alt="" className="w-4" />
                            Free shipping worldwide
                        </p>
                        <p className="flex items-center gap-3 text-sm sm:text-base">
                            <img src="/Products/pure.png" alt="" className="w-4" />
                            100% pure material
                        </p>
                        <p className="flex items-center gap-3 text-sm sm:text-base">
                            <img src="/Products/Professional.png" alt="" className="w-4" />
                            Made by professionals
                        </p>
                    </div>
                </div>
            </div>
            <Product_reviews_description single_product={single_product} />
        </div>
    );
};

export default SingleProductDetail;
