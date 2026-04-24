import React, { useState } from "react";
import { useCars } from "../context/CarsContext";
import { Plus, Edit, Trash2, Upload, Calendar, User, Car } from "lucide-react";

const AdminDashboard = () => {
    const { cars, addCar, editCar, deleteCar, rentals, updateRentalStatus, deleteRental } = useCars();
    const [form, setForm] = useState({ name: "", description: "", place: "", price: "", image: "" });
    const [editingId, setEditingId] = useState(null);
    const [imageFile, setImageFile] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingId) {
            editCar(editingId, form);
            setEditingId(null);
        } else {
            addCar(form);
        }
        setForm({ name: "", description: "", place: "", price: "", image: "" });
        setImageFile(null);
    };

    const handleEdit = (car) => {
        setForm(car);
        setEditingId(car.id);
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setForm({ ...form, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="text-white p-4">
            <h1 className="text-2xl font-bold mb-6">Admin Dashboard - Car Management CRUD Feature</h1>

            {/* Add/Edit Form */}
            <div className="bg-slate-900 p-6 rounded-xl mb-6">
                <h2 className="text-xl font-semibold mb-4">{editingId ? "Edit Car" : "Add New Car"}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Car Name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="bg-slate-800 p-3 rounded-md outline-none"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Place"
                            value={form.place}
                            onChange={(e) => setForm({ ...form, place: e.target.value })}
                            className="bg-slate-800 p-3 rounded-md outline-none"
                            required
                        />
                        <input
                            type="number"
                            placeholder="Price per day"
                            value={form.price}
                            onChange={(e) => setForm({ ...form, price: e.target.value })}
                            className="bg-slate-800 p-3 rounded-md outline-none"
                            required
                        />
                        <div className="flex items-center gap-2">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                                id="imageUpload"
                            />
                            <label htmlFor="imageUpload" className="bg-slate-800 p-3 rounded-md cursor-pointer flex items-center gap-2">
                                <Upload size={16} />
                                Upload Image
                            </label>
                            {form.image && <span className="text-sm text-green-400">Image selected</span>}
                        </div>
                    </div>
                    <textarea
                        placeholder="Description"
                        value={form.description}
                        onChange={(e) => setForm({ ...form, description: e.target.value })}
                        className="bg-slate-800 p-3 rounded-md outline-none w-full"
                        rows="3"
                        required
                    />
                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md transition">
                        {editingId ? "Update Car" : "Add Car"}
                    </button>
                    {editingId && (
                        <button
                            type="button"
                            onClick={() => { setEditingId(null); setForm({ name: "", description: "", place: "", price: "", image: "" }); }}
                            className="ml-4 bg-gray-600 hover:bg-gray-700 px-6 py-2 rounded-md transition"
                        >
                            Cancel
                        </button>
                    )}
                </form>
            </div>

            {/* Cars List */}
            <div className="bg-slate-900 p-6 rounded-xl">
                <h2 className="text-xl font-semibold mb-4">Cars List</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cars.map(car => (
                        <div key={car.id} className="bg-slate-800 p-8 rounded-lg">
                            <img
                                src={car.image}
                                alt={car.name}
                                className="w-full h-40 object-contain bg-slate-700 rounded mb-3"
                            />
                            <h3 className="font-bold p-3">{car.name}</h3>
                            <p className="text-sm text-gray-400 mb-2">{car.description}</p>
                            <p className="text-sm text-gray-500">{car.place} - ${car.price}/day</p>
                            <div className="flex gap-2 mt-3">
                                <button
                                    onClick={() => handleEdit(car)}
                                    className="bg-yellow-600 hover:bg-yellow-700 px-3 py-1 rounded text-sm transition"
                                >
                                    <Edit size={14} />
                                </button>
                                <button
                                    onClick={() => deleteCar(car.id)}
                                    className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm transition"
                                >
                                    <Trash2 size={14} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Rentals Management */}
            <div className="bg-slate-900 p-6 rounded-xl mt-6">
                <h2 className="text-xl font-semibold mb-4">Rentals Management</h2>
                <div className="space-y-4">
                    {rentals.length === 0 ? (
                        <p className="text-gray-400">No rentals yet.</p>
                    ) : (
                        rentals.map(rental => (
                            <div key={rental.id} className="bg-slate-800 p-4 rounded-lg">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                    <div className="flex items-center gap-2">
                                        <Car size={16} />
                                        <span className="font-semibold">{rental.carName}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <User size={16} />
                                        <span>{rental.customerName}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} />
                                        <span>{rental.pickupDate} - {rental.returnDate}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className={`px-2 py-1 rounded text-sm ${rental.status === 'active' ? 'bg-green-600' :
                                                rental.status === 'completed' ? 'bg-blue-600' : 'bg-red-600'
                                            }`}>
                                            {rental.status}
                                        </span>
                                        <select
                                            value={rental.status}
                                            onChange={(e) => updateRentalStatus(rental.id, e.target.value)}
                                            className="bg-slate-700 p-1 rounded text-sm"
                                        >
                                            <option value="active">Active</option>
                                            <option value="completed">Completed</option>
                                            <option value="cancelled">Cancelled</option>
                                        </select>
                                        <button
                                            onClick={() => deleteRental(rental.id)}
                                            className="bg-red-600 hover:bg-red-700 px-2 py-1 rounded text-sm transition"
                                        >
                                            <Trash2 size={14} />
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-2 text-sm text-gray-400">
                                    Pickup: {rental.pickupLocation} | Return: {rental.returnLocation} | Total: ${rental.total}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;