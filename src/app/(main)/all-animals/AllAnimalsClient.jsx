"use client";
import { useState } from "react";
import CardAnimals from "./card";

const AllAnimalsClient = ({ animals }) => {
    const [sortOrder, setSortOrder] = useState("default");

    const sortedAnimals = [...animals].sort((a, b) => {
        if (sortOrder === "low") return a.price - b.price;
        if (sortOrder === "high") return b.price - a.price;
        return 0;
    });

    return (
        <div className="container mx-auto px-4 py-10">
            
            {/* Filter Buttons */}
            <div className="flex gap-4 justify-center mb-8">
                <button
                    onClick={() => setSortOrder("low")}
                    className={`btn ${sortOrder === "low" ? "bg-green-500 text-white" : "btn-outline border-green-500 text-green-500"}`}
                >
                    Price: Low to High ↑
                </button>
                <button
                    onClick={() => setSortOrder("high")}
                    className={`btn ${sortOrder === "high" ? "bg-green-500 text-white" : "btn-outline border-green-500 text-green-500"}`}
                >
                    Price: High to Low ↓
                </button>
            </div>

            {/* Animal Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {sortedAnimals.map(animal => (
                    <CardAnimals key={animal.id} animal={animal} />
                ))}
            </div>

        </div>
    );
};

export default AllAnimalsClient;