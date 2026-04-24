import { Search } from "lucide-react";
import { useCars } from "../context/CarsContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Main = () => {
    const { cars } = useCars();
    const [selectedCar, setSelectedCar] = useState(null);
    const navigate = useNavigate();

    return (

        <main className="flex-1 p-4 md:p-6 transition-all duration-300">
            {/* 🔹 Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <h1 className="text-xl md:text-2xl font-bold">
                    Car Rental Platform
                </h1>

                {/* Search */}
                <div className="flex items-center bg-slate-800 px-3 py-2 rounded-md w-full md:w-64">
                    <Search size={18} />
                    <input
                        type="text"
                        placeholder="Search cars..."
                        className="bg-transparent outline-none ml-2 text-sm w-full"
                    />
                </div>
            </div>

            {/* 🔹 Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-3">
                <div className="bg-slate-900 p-4 rounded-xl shadow">
                    <h2 className="text-sm text-gray-400">Total Cars</h2>
                    <p className="text-2xl font-bold">{cars.length}</p>
                </div>

                <div className="bg-slate-900 p-4 rounded-xl shadow">
                    <h2 className="text-sm text-gray-400">Available Cars</h2>
                    <p className="text-2xl font-bold">{cars.length}</p>
                </div>

                <div className="bg-slate-900 p-4 rounded-xl shadow">
                    <h2 className="text-sm text-gray-400">Locations</h2>
                    <p className="text-2xl font-bold">{new Set(cars.map(car => car.place)).size}</p>
                </div>
            </div>
            {selectedCar && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 h-full">
                    <div className="bg-slate-900 p-4 md:p-6 rounded-xl w-full max-w-md md:max-w-lg relative">

                        {/* Close button */}
                        <button
                            onClick={() => setSelectedCar(null)}
                            className="absolute top-2 right-3 text-white text-lg cursor-pointer"
                        >
                            ✕
                        </button>

                        {/* Image */}
                        <img
                            src={selectedCar.image}
                            alt={selectedCar.name}
                            className="w-full h-48 md:h-96 object-contain bg-slate-800 rounded mb-4"
                        />

                        {/* Info */}
                        <h2 className="text-xl  md:text-xl font-bold mb-2">{selectedCar.name}</h2>
                        <p className="text-gray-400 text-lg md:text-base mb-2">{selectedCar.description}</p>
                        <p className="text-sm text-gray-500">Place of this car is: {selectedCar.place}</p>
                        <p className="text-green-400 font-semibold text-sm md:text-base">${selectedCar.price}/day</p>

                    </div>
                </div>
            )}
            {/* 🔹 Car List */}
            <div>
                <h2 className="text-lg font-semibold mb-4">Available Cars</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {cars.map(car => (
                        <div key={car.id} className="bg-slate-900 rounded-xl overflow-hidden shadow hover:scale-[1.02] transition">
                            <img
                                src={car.image}
                                alt={car.name}
                                onClick={() => setSelectedCar(car)}
                                className="w-full h-40 object-contain bg-slate-700 rounded mb-3"
                            />
                            <div className="p-4">
                                <h3 className="font-bold">{car.name}</h3>
                                <p className="text-sm text-gray-400 mb-2">{car.description}</p>
                                <p className="text-sm text-gray-500">{car.place}</p>
                                <p className="text-sm text-gray-400">${car.price}/day</p>
                                <button
                                    onClick={() => navigate("/booking", { state: { car } })}
                                    className="mt-3 w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-md text-sm transition"
                                >
                                    Rent Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </main>
    );
}
export default Main