"use client"
import React, { useEffect, useState } from "react";

export default function Main() {
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const fetchItems = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setItems(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchItems();
    }, []);

    const addToHandler = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ todo: inputValue }),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            // Clear input value and refresh items list
            setInputValue("");
            fetchItems();
        } catch (error) {
            console.error("Error adding item:", error);
            // You can add more specific error handling based on the type of error
        }
    };
    

    const deleteItem = async (id) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // Refresh items list after deletion
            fetchItems();
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    return (
        <div className="bg-blue-500 w-min h-96 text-2xl justify-center p-4 rounded-lg grid grid-rows-3 grid-flow-col gap-2">
            <div className="flex flex-row">
                <input
                    type="text"
                    className="p-2 rounded-lg border border-gray-300 h-16 m-2"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter something..."
                />
                <button
                    className="p-2 m-2 h-16 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                    onClick={addToHandler}
                >
                    Add
                </button>
            </div>

            <div className="flex flex-col w-full row-span-2 scroll-smooth overflow-y-auto">
                <ul>
                    {items.map((item) => (
                        <li key={item.id} className="mb-2 mr-4 w-full bg-yellow-300 rounded-lg p-2 flex justify-between">
                            {item.todo}
                            <button onClick={() => deleteItem(item.id)}>D</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
