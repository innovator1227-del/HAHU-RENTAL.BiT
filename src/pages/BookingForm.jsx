import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Calendar, MapPin, Phone, MessageCircle } from "lucide-react";

const BookingForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const car = location.state?.car; // Passed from Main

    const [formData, setFormData] = useState({
        pickupDate: "",
        returnDate: "",
        pickupLocation: "",
        returnLocation: "",
        options: {
            gps: false,
            insurance: false,
            childSeat: false
        }
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === "checkbox") {
            setFormData(prev => ({
                ...prev,
                options: { ...prev.options, [name]: checked }
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Navigate to checkout with car and formData
        navigate("/checkout", { state: { car, booking: formData } });
    };

    const handleWhatsApp = () => {
        const message = `Hi, I'm interested in renting ${car?.name}. Pickup: ${formData.pickupDate}, Return: ${formData.returnDate}`;
        const url = `https://wa.me/251911123456?text=${encodeURIComponent(message)}`; // Replace with actual number
        window.open(url, "_blank");
    };

    const handleCall = () => {
        window.location.href = "Ethiotel:+251 927 5203 86"; // Replace with actual number
    };

    if (!car) return <div className="p-4">No car selected</div>;

    return (
        <div className="min-h-screen bg-slate-950 text-white p-4 md:p-6">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Book Your Car</h1>

                <div className="bg-slate-900 p-4 md:p-6 rounded-xl mb-6">
                    <h2 className="text-xl font-semibold mb-4">{car.name}</h2>
                    <img src={car.image} alt={car.name} className="w-full h-48 md:h-64 object-contain bg-slate-800 rounded mb-4" />
                    <p className="text-gray-400 mb-2">{car.description}</p>
                    <p className="text-green-400 font-semibold">${car.price}/day</p>
                </div>

                <form onSubmit={handleSubmit} className="bg-slate-900 p-4 md:p-6 rounded-xl space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Pickup Date</label>
                            <input
                                type="date"
                                name="pickupDate"
                                value={formData.pickupDate}
                                onChange={handleChange}
                                required
                                className="w-full p-3 bg-slate-800 rounded-md text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Return Date</label>
                            <input
                                type="date"
                                name="returnDate"
                                value={formData.returnDate}
                                onChange={handleChange}
                                required
                                className="w-full p-3 bg-slate-800 rounded-md text-white"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Pickup Location</label>
                            <input
                                type="text"
                                name="pickupLocation"
                                value={formData.pickupLocation}
                                onChange={handleChange}
                                placeholder="Enter pickup location"
                                required
                                className="w-full p-3 bg-slate-800 rounded-md text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Return Location</label>
                            <input
                                type="text"
                                name="returnLocation"
                                value={formData.returnLocation}
                                onChange={handleChange}
                                placeholder="Enter return location"
                                required
                                className="w-full p-3 bg-slate-800 rounded-md text-white"
                            />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3">Additional Options</h3>
                        <div className="space-y-2">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="gps"
                                    checked={formData.options.gps}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                GPS Navigation ($10/day)
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="insurance"
                                    checked={formData.options.insurance}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Additional Insurance ($15/day)
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    name="childSeat"
                                    checked={formData.options.childSeat}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                Child Seat ($5/day)
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button
                            type="submit"
                            className="flex-1 bg-blue-600 hover:bg-blue-700 py-3 px-6 rounded-md font-semibold transition"
                        >
                            Proceed to Checkout
                        </button>
                        <button
                            type="button"
                            onClick={handleWhatsApp}
                            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 py-3 px-6 rounded-md font-semibold transition"
                        >
                            <MessageCircle size={20} />
                            WhatsApp
                        </button>
                        <button
                            type="button"
                            onClick={handleCall}
                            className="flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 py-3 px-6 rounded-md font-semibold transition"
                        >
                            <Phone size={20} />
                            Call
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingForm;