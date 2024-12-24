import React, { useEffect, useState } from "react";
import { getCart, deleteFromCart } from "../utils/api";

interface CartItem {
    id: number;
    brand: string;
    model: string;
    fuel: string;
    power: number;
    price: number;
}

const Cart = () => {
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const data = await getCart();
                console.log("Fetched cart:", data);
                setCart(data);
            } catch (error) {
                console.error("Error fetching cart:", error);
            }
        };
        fetchCart();
    }, []);

    const removeFromCartHandler = async (id: number) => {
        try {
            await deleteFromCart(id);
            alert("Removed from cart!");
            setCart((prevCart) => prevCart.filter((item) => item.id !== id));
        } catch (error) {
            console.error("Error removing from cart:", error);
            alert("Failed to remove from cart");
        }
    };

    return (
        <>
            <div id="title" className="text-center ml-20">
                <h1 className="text-6xl font-bold p-4">Cart</h1>
            </div>
            <div id="wrapper" className="container w-80 ml-20 border-8 px-8">
                <div id="cart" className="p-4">
                    <h1 className="text-xl font-bold">Products list:</h1>
                    <div id="cart-items">
                        {cart.length > 0 ? (
                            cart.map((product) => (
                                <div
                                    key={product.id}
                                    className="flex justify-between items-center border-b p-2"
                                >
                                    <table>
                                      <tr>
                                        <td>
                                          <h3>{product.brand} {product.model}</h3>
                                        </td>
                                        <td>${product.price}</td>
                                      </tr>
                                    </table>
                                    <div>
                                        <button
                                            onClick={() =>
                                                removeFromCartHandler(
                                                    product.id
                                                )
                                            }
                                            className="bg-red-500 text-white p-2 rounded-lg"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-600">
                                Your cart is empty
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
