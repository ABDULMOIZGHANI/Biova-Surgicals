import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../features/cartSlice";
import { ShoppingCart, Trash2, X } from "lucide-react"; // Using Lucide icons (you can use any icon library)

const Cart = () => {
    const { cartItems, totalPrice } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="flex items-center gap-2 mb-6">
                <ShoppingCart className="w-8 h-8 text-[#008581]" />
                <h2 className="text-2xl font-bold text-gray-800 playfair">Your Shopping Cart</h2>
            </div>

            {cartItems.length === 0 ? (
                <div className="bg-[#DEFDFC] rounded-lg p-8 text-center">
                    <ShoppingCart className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600 text-lg">Your cart is empty</p>
                    <p className="text-gray-500 mt-2">Start adding some items to your cart</p>
                </div>
            ) : (
                <div className="space-y-6">
                    <div className="divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden">
                        {cartItems.map((item) => (
                            <div key={item.id} className="p-4 flex justify-between items-center hover:bg-gray-50 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 bg-gray-100 rounded-md flex items-center justify-center">

                                        <span className="text-gray-400 text-xs">
                                            <img src={item.product_images[0]} alt="" />
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 lato">{item.title}</h3>
                                        <p className="text-gray-600">${item.price.toFixed(2)}</p>
                                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => dispatch(removeFromCart(item))}
                                    className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-50 transition-colors"
                                    aria-label="Remove item"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <div className="flex justify-between items-center">
                            <span className="font-medium text-gray-700">Total:</span>
                            <span className="font-bold text-lg text-gray-900">${totalPrice.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="flex justify-end gap-3">
                        <button
                            onClick={() => dispatch(clearCart())}
                            className="flex items-center gap-2 px-4 py-2 text-red-600 hover:text-red-700 border border-red-200 hover:border-red-300 rounded-md transition-colors"
                        >
                            <Trash2 className="w-5 h-5" />
                            Clear Cart
                        </button>
                        <button
                            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors"
                        // Add your checkout logic here
                        >
                            Checkout
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;