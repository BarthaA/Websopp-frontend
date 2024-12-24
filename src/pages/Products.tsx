import React, { useState, useEffect } from "react";
import Footer from "../sections/Footer";
import "../styles/pageStyles/_products.scss";
import { FaShoppingCart } from "react-icons/fa";
import { Car, getCars, addToCart } from "../utils/api";

const Products = () => {
    const [products, setProducts] = useState<Car[]>([]);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const data = await getCars(1, 10);
                console.log("Fetched cars:", data);
                setProducts(data);
            } catch (error) {
                console.error("Error fetching cars:", error);
                setProducts([]);
            }
        };

        fetchCars();
    }, []);

    const toggleLearnMore = (index: number) => {
        const learnDiv = document.getElementById(`learn-div-${index}`);
        if (learnDiv) {
            learnDiv.style.display =
                learnDiv.style.display === "block" ? "none" : "block";
        }
    };

    const addToCartHandler = async (id: number) => {
        try {
          const response = await addToCart(id);
          console.log("Add to cart response:", response);
          alert("Added to cart!");
        } catch (error) {
          console.error("Error adding to cart:", error);
          alert("Failed to add to cart");
        }
      };

    return (
        <>
            <div className="overflow-hidden">
                <div
                    id="title"
                    className="w-screen ml-4 text-center bg-gradient-to-b from-gray-500 to-white h-28 p-4"
                >
                    <h1 className="text-6xl font-bold">Cars List</h1>
                    <p>Choose your favourite car!</p>
                </div>
                <div id="wrapper" className="pl-20 pr-4 pb-12 bg-gradient-to-b from-orange-500 to-orange-800 pt-12 w-sceen">
                    <div
                        id="products"
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4"
                    >
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white shadow-lg rounded-lg overflow-hidden"
                            >
                                <img
                                    src={`https://via.placeholder.com/300x200?text=${product.brand}`}
                                    alt={product.brand}
                                    className="w-full h-40 object-cover"
                                />
                                <div className="p-4">
                                    <h2 className="font-bold text-xl">
                                        {product.brand} {product.model}
                                    </h2>
                                    <p className="text-gray-600">
                                        Starting at ${product.price}
                                    </p>
                                    <div id="action-div" className="flex flex-row justify-evenly w-[100%]">
                                        <button
                                            onClick={() => toggleLearnMore(product.id)}
                                            className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md"
                                        >
                                            Learn More
                                        </button>
                                        <button
                                            onClick={() => addToCartHandler(product.id)}
                                            className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md align flex flex-row">
                                            <FaShoppingCart size={16} className="relative translate-y-1 mr-2"/>
                                            Add to cart
                                        </button>
                                    </div>
                                    <div
                                        id={`learn-div-${product.id}`}
                                        className="transition-all absolute bg-gray-300 rounded-md p-2 hidden translate-x-[19px]"
                                    >
                                        <p className="text-gray-600 font-semibold text-md">
                                            Fuel: {product.fuel}
                                        </p>
                                        <p className="text-gray-600 font-semibold text-md">
                                            Power: {product.power} HP
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Products;
