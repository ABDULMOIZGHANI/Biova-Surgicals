import { useState } from "react";
import { X } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cartSlice";
import { API_NAME } from "../constant/index"
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ totalPrice, onClose }) => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        apartment: '',
        city: '',
        country: '',
        postalCode: '',
        saveInfo: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const orderData = { ...formData, cartItems, totalPrice };

        try {
            const response = await fetch(`${API_NAME}/api/orders/create-order`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(orderData),
            });

            if (response.ok) {
                dispatch(clearCart());
                onClose();
                navigate("/thank-you")
            } else {
                alert("Failed to place order");
            }
        } catch (error) {
            console.error("Error placing order:", error);
        }
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Checkout</h2>
                <button
                    onClick={onClose}
                    className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"
                >
                    <X className="w-6 h-6" />
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                            First Name*
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#008581] focus:border-[#008581]"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                            Last Name*
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#008581] focus:border-[#008581]"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address*
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#008581] focus:border-[#008581]"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number*
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#008581] focus:border-[#008581]"
                    />
                </div>

                <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Street Address*
                    </label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#008581] focus:border-[#008581]"
                    />
                </div>

                <div>
                    <label htmlFor="apartment" className="block text-sm font-medium text-gray-700 mb-1">
                        Apartment, Suite, etc. (Optional)
                    </label>
                    <input
                        type="text"
                        id="apartment"
                        name="apartment"
                        value={formData.apartment}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#008581] focus:border-[#008581]"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                            City*
                        </label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#008581] focus:border-[#008581]"
                        />
                    </div>

                    <div>
                        <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                            ZIP/Postal Code*
                        </label>
                        <input
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            value={formData.postalCode}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#008581] focus:border-[#008581]"
                        />
                    </div>
                </div>

                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="saveInfo"
                        name="saveInfo"
                        checked={formData.saveInfo}
                        onChange={handleChange}
                        className="h-4 w-4 text-[#008581] focus:ring-[#008581] border-gray-300 rounded"
                    />
                    <label htmlFor="saveInfo" className="ml-2 block text-sm text-gray-700">
                        Save this information for next time
                    </label>
                </div>

                <div className="border-t border-gray-200 pt-6">
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-gray-600">Total</span>
                        <span className="text-[#008581] font-bold text-xl">${totalPrice.toFixed(2)}</span>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-6 py-3 bg-[#008581] hover:bg-[#006D69] text-white rounded-lg transition-colors font-medium"
                    >
                        Complete Order
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;