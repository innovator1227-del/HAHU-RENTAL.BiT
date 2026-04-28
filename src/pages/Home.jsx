import React from "react";
import { Link } from "react-router-dom";
import Slick from "react-slick";
const Slider = Slick?.default?.default || Slick?.default || Slick;
import Bus9 from "../assets/Bus9.png";
import Bus1 from "../assets/Bus1.png";
import Bus6 from "../assets/Bus6.png";

const Home = () => {
    const heroSlides = [
        {
            id: 1,
            img: Bus9,
            title: "Drive Across Ethiopia",
            description:
                "Find reliable, affordable, and comfortable rental cars for business trips, family travel, and city rides.",
        },
        {
            id: 2,
            img: Bus1,
            title: "Comfort, Safety & Trust",
            description:
                "Choose from Economy, SUV, Luxury, and VIP vehicles with trusted drivers and verified owners.",
        },
        {
            id: 3,
            img: Bus6,
            title: "Fast Online Booking",
            description:
                "Book your next ride in minutes with secure reservations and smooth customer support.",
        },
    ];

    const popularCars = [
        {
            title: "Toyota Corolla",
            type: "Economy",
            price: "From 2,500 ETB/day",
        },
        {
            title: "Hyundai Tucson",
            type: "SUV",
            price: "From 4,500 ETB/day",
        },
        {
            title: "Mercedes Benz",
            type: "Luxury",
            price: "From 8,000 ETB/day",
        },
    ];

    const services = [
        {
            title: "Daily Car Rental",
            desc: "Flexible short-term rentals for personal and business travel.",
        },
        {
            title: "Airport Pickup",
            desc: "Reliable airport transfers with professional drivers.",
        },
        {
            title: "Corporate Booking",
            desc: "Business transportation solutions for companies and teams.",
        },
    ];

    const testimonials = [
        {
            name: "Abel T.",
            text: "Very smooth booking experience and the car was clean and comfortable.",
        },
        {
            name: "Meron D.",
            text: "Affordable prices and professional customer support. Highly recommended.",
        },
        {
            name: "Samuel K.",
            text: "Perfect platform for quick rentals. I use it often for business trips.",
        },
    ];

    const sliderSettings = {
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3500,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="min-h-screen bg-slate-50">
            {/* TOP NAVBAR */}
            <header className="sticky top-0 z-50 bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                    <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
                        HAHU RENTALS
                    </h1>

                    <div className="flex items-center gap-3">
                        <Link
                            to="/login"
                            className="px-4 py-2 rounded-lg border border-slate-300 text-sm font-medium hover:bg-slate-100 transition"
                        >
                            Login
                        </Link>

                        <Link
                            to="/register"
                            className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            </header>

            {/* HERO SECTION */}
            <section className="relative overflow-hidden py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <Slider {...sliderSettings}>
                        {heroSlides.map((slide) => (
                            <div key={slide.id}>
                                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                                    {/* LEFT */}
                                    <div
                                        className="space-y-6 text-center md:text-left"
                                    >
                                        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                                            Trusted Car Rental Platform
                                        </p>

                                        <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 leading-tight">
                                            {slide.title}
                                        </h2>

                                        <p className="text-slate-600 text-sm sm:text-base leading-7 max-w-xl mx-auto md:mx-0">
                                            {slide.description}
                                        </p>

                                        <div className="flex justify-center md:justify-start items-center gap-3 text-yellow-500">
                                            ⭐⭐⭐⭐⭐
                                            <span className="text-slate-700 text-sm">
                                                4.8/5 Rating • 5,000+ Happy Customers
                                            </span>
                                        </div>

                                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                            <Link
                                                to="/login"
                                                className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
                                            >
                                                Book Your Ride
                                            </Link>

                                            <Link
                                                to="/register"
                                                className="border border-slate-300 px-6 py-3 rounded-xl hover:bg-slate-100 transition"
                                            >
                                                Create Account
                                            </Link>
                                        </div>
                                    </div>

                                    {/* RIGHT */}
                                    <div
                                        className="flex justify-center"
                                    >
                                        <img
                                            src={slide.img}
                                            alt="car"
                                            className="w-full max-w-md object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>

            {/* QUICK SEARCH */}
            <section
                className="max-w-6xl mx-auto px-4 sm:px-6 mt-10"
            >
                <div className="bg-white rounded-2xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
                    <input
                        type="text"
                        placeholder="Pickup Location"
                        className="border rounded-lg px-4 py-3 outline-none"
                    />

                    <input
                        type="date"
                        className="border rounded-lg px-4 py-3 outline-none"
                    />

                    <input
                        type="date"
                        className="border rounded-lg px-4 py-3 outline-none"
                    />

                    <Link
                        to="/login"
                        className="bg-blue-600 text-white rounded-lg px-6 py-3 text-center hover:bg-blue-700 transition"
                    >
                        Search Cars
                    </Link>
                </div>
            </section>

            {/* POPULAR CARS */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-20">
                <h2
                    className="text-3xl font-bold text-slate-900 mb-8"
                >
                    Popular Cars
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {popularCars.map((car, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
                        >
                            <h3 className="text-xl font-semibold text-slate-900">
                                {car.title}
                            </h3>

                            <p className="text-slate-600 mt-2">{car.type}</p>
                            <p className="text-blue-600 font-medium mt-3">{car.price}</p>

                            <Link
                                to="/login"
                                className="inline-block mt-4 text-sm font-medium text-blue-600 hover:underline"
                            >
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* SERVICES */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-20">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                    Our Services
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition"
                        >
                            <h3 className="text-xl font-semibold text-slate-900 mb-3">
                                {service.title}
                            </h3>

                            <p className="text-slate-600">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 mt-20 mb-20">
                <h2 className="text-3xl font-bold text-slate-900 mb-8">
                    What Our Customers Say
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md p-6"
                        >
                            <p className="text-slate-600 mb-4">
                                "{item.text}"
                            </p>

                            <h4 className="font-semibold text-slate-900">
                                — {item.name}
                            </h4>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;