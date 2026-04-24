import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CreditCard, CheckCircle } from "lucide-react";
import { useCars } from "../context/CarsContext";

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { addRental } = useCars();
    const { car, booking } = location.state || {};

    const [paymentData, setPaymentData] = useState({
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        name: ""
    });
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPaymentData(prev => ({ ...prev, [name]: value }));
    };

    const calculateTotal = () => {
        const days = Math.ceil((new Date(booking.returnDate) - new Date(booking.pickupDate)) / (1000 * 60 * 60 * 24));
        let total = days * car.price;
        if (booking.options.gps) total += days * 10;
        if (booking.options.insurance) total += days * 15;
        if (booking.options.childSeat) total += days * 5;
        return total;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate payment processing
        setTimeout(() => {
            setIsProcessing(false);
            setIsSuccess(true);
            // Save the rental
            addRental({
                carId: car.id,
                carName: car.name,
                customerName: paymentData.name,
                pickupDate: booking.pickupDate,
                returnDate: booking.returnDate,
                pickupLocation: booking.pickupLocation,
                returnLocation: booking.returnLocation,
                options: booking.options,
                total: total
            });
            setTimeout(() => {
                navigate("/");
            }, 2000);
        }, 2000);
    };

    if (!car || !booking) return <div className="p-4">No booking data</div>;

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
                <div className="text-center">
                    <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                    <h1 className="text-2xl md:text-3xl font-bold mb-2">Booking Successful!</h1>
                    <p className="text-gray-400">Your car rental has been confirmed.</p>
                </div>
            </div>
        );
    }

    const days = Math.ceil((new Date(booking.returnDate) - new Date(booking.pickupDate)) / (1000 * 60 * 60 * 24));
    const total = calculateTotal();

    return (
        <div className="min-h-screen bg-slate-950 text-white p-4 md:p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Checkout</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Booking Summary */}
                    <div className="bg-slate-900 p-4 md:p-6 rounded-xl">
                        <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>

                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span>Car:</span>
                                <span className="font-semibold">{car.name}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Pickup Date:</span>
                                <span>{booking.pickupDate}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Return Date:</span>
                                <span>{booking.returnDate}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Duration:</span>
                                <span>{days} days</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Base Price:</span>
                                <span>${car.price} × {days} = ${car.price * days}</span>
                            </div>
                            {booking.options.gps && (
                                <div className="flex justify-between">
                                    <span>GPS:</span>
                                    <span>$10 × {days} = ${10 * days}</span>
                                </div>
                            )}
                            {booking.options.insurance && (
                                <div className="flex justify-between">
                                    <span>Insurance:</span>
                                    <span>$15 × {days} = ${15 * days}</span>
                                </div>
                            )}
                            {booking.options.childSeat && (
                                <div className="flex justify-between">
                                    <span>Child Seat:</span>
                                    <span>$5 × {days} = ${5 * days}</span>
                                </div>
                            )}
                            <hr className="border-slate-700" />
                            <div className="flex justify-between text-lg font-bold">
                                <span>Total:</span>
                                <span>${total}</span>
                            </div>
                        </div>
                    </div>

                    {/* Payment Form */}
                    <div className="bg-slate-900 p-4 md:p-6 rounded-xl">
                        <h2 className="text-xl font-semibold mb-4">Payment Details</h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium mb-2">Card Number</label>
                                <input
                                    type="text"
                                    name="cardNumber"
                                    value={paymentData.cardNumber}
                                    onChange={handleChange}
                                    placeholder="1234 5678 9012 3456"
                                    required
                                    className="w-full p-3 bg-slate-800 rounded-md text-white"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-2">Expiry Date</label>
                                    <input
                                        type="text"
                                        name="expiryDate"
                                        value={paymentData.expiryDate}
                                        onChange={handleChange}
                                        placeholder="MM/YY"
                                        required
                                        className="w-full p-3 bg-slate-800 rounded-md text-white"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-2">CVV</label>
                                    <input
                                        type="text"
                                        name="cvv"
                                        value={paymentData.cvv}
                                        onChange={handleChange}
                                        placeholder="123"
                                        required
                                        className="w-full p-3 bg-slate-800 rounded-md text-white"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Cardholder Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={paymentData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                    className="w-full p-3 bg-slate-800 rounded-md text-white"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isProcessing}
                                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 py-3 px-6 rounded-md font-semibold transition flex items-center justify-center gap-2"
                            >
                                {isProcessing ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        <CreditCard size={20} />
                                        Pay ${total}
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;