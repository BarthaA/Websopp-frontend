import React from "react";
import "../styles/pageStyles/_landingPage.scss";
import { Link } from "react-router-dom";
import Footer from "../sections/Footer";

const LandingPage = () => {
    return (
        <>
            <div className="pl-20 page-wrapper font-sans w-screen">
                <section
                    id="hero-section"
                    className="text-white h-screen flex flex-col items-center justify-center"
                >
                    <div className="text-center">
                        <h1 className="text-6xl font-bold mb-2">
                            Your Dream Car Awaits
                        </h1>
                        <p className="text-2xl mb-8 text-white">
                            Explore a wide selection of cars tailored to your
                            needs.
                        </p>
                        <Link to={"/products"} className="hover:scale-105 transition-all duration-200">
                            <button
                                id="action-button"
                                className="bg-orange-500 hover:bg-orange-600
                                text-white font-semibold py-3 px-8 rounded-md shadow-md"
                            >
                                Browse Cars
                            </button>
                        </Link>
                    </div>
                </section>
                <section className="py-16 px-4 bg-gray-100">
                    <h2 className="text-3xl font-semibold text-center mb-12">
                        Featured Cars
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {["Audi", "Bmw", "Toyota", "Honda"].map(
                            (type, index) => (
                                <div
                                    key={index}
                                    className="bg-white shadow-lg rounded-lg overflow-hidden"
                                >
                                    <img
                                        src={`https://via.placeholder.com/300x200?text=${type}`}
                                        alt={`${type}`}
                                        className="w-full h-40 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="font-bold text-lg">
                                            {type}
                                        </h3>
                                        <p className="text-gray-600">
                                            Starting at $10,000
                                        </p>
                                        <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </section>

                <section className="py-16 bg-orange-500 text-white">
                    <div className="text-center" id="special-offer-div">
                        <h2 className="text-3xl font-bold mb-4">
                            Special Holiday Offers
                        </h2>
                        <p className="text-lg mb-6">
                            Limited time deals on selected models. Don’t miss
                            out!
                        </p>
                        <button className="bg-white text-orange-500 hover:text-orange-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-md shadow-md">
                            View Offers
                        </button>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
};

export default LandingPage;
