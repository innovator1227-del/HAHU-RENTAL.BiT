import { createContext, useContext, useState, useEffect } from "react";

const CarsContext = createContext();

export const useCars = () => useContext(CarsContext);

export const CarsProvider = ({ children }) => {
    const [cars, setCars] = useState([]);
    const [rentals, setRentals] = useState([]);

    useEffect(() => {
        const storedCars = localStorage.getItem("cars");
        if (storedCars) {
            setCars(JSON.parse(storedCars));
        } else {
            // Default cars
            const defaultCars = [
                {
                    id: 1,
                    name: "Toyota Corolla",
                    description: "Reliable sedan for city driving.",
                    place: "Bahirdar",
                    price: 50,
                    image: "https://via.placeholder.com/400x200?text=Toyota+Corolla"
                },
                {
                    id: 2,
                    name: "Honda Civic",
                    description: "Comfortable and fuel-efficient.",
                    place: "Addis Ababa",
                    price: 60,
                    image: "https://via.placeholder.com/400x200?text=Honda+Civic"
                }
            ];
            setCars(defaultCars);
            localStorage.setItem("cars", JSON.stringify(defaultCars));
        }

        const storedRentals = localStorage.getItem("rentals");
        if (storedRentals) {
            setRentals(JSON.parse(storedRentals));
        }
    }, []);

    const addCar = (car) => {
        const newCar = { ...car, id: Date.now() };
        const updatedCars = [...cars, newCar];
        setCars(updatedCars);
        localStorage.setItem("cars", JSON.stringify(updatedCars));
    };

    const editCar = (id, updatedCar) => {
        const updatedCars = cars.map(car => car.id === id ? { ...car, ...updatedCar } : car);
        setCars(updatedCars);
        localStorage.setItem("cars", JSON.stringify(updatedCars));
    };

    const deleteCar = (id) => {
        const updatedCars = cars.filter(car => car.id !== id);
        setCars(updatedCars);
        localStorage.setItem("cars", JSON.stringify(updatedCars));
    };

    const addRental = (rental) => {
        const newRental = { ...rental, id: Date.now(), status: "active" };
        const updatedRentals = [...rentals, newRental];
        setRentals(updatedRentals);
        localStorage.setItem("rentals", JSON.stringify(updatedRentals));
    };

    const updateRentalStatus = (id, status) => {
        const updatedRentals = rentals.map(rental => rental.id === id ? { ...rental, status } : rental);
        setRentals(updatedRentals);
        localStorage.setItem("rentals", JSON.stringify(updatedRentals));
    };

    const deleteRental = (id) => {
        const updatedRentals = rentals.filter(rental => rental.id !== id);
        setRentals(updatedRentals);
        localStorage.setItem("rentals", JSON.stringify(updatedRentals));
    };

    return (
        <CarsContext.Provider value={{ cars, addCar, editCar, deleteCar, rentals, addRental, updateRentalStatus, deleteRental }}>
            {children}
        </CarsContext.Provider>
    );
};