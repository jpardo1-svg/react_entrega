import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList() {
    const dispatch = useDispatch();
    const [addedToCart, setAddedToCart] = useState({});

    const plantsArray = [
        {
            category: "Plantas de Aire Purificado",
            plants: [
                { name: "Snake Plant", image: "url", cost: "$15" },
                { name: "Spider Plant", image: "url", cost: "$12" },
                // ... agrega 4 más para cumplir "al menos 6"
            ]
        },
        // ... agrega 2 categorías más
    ];

    const handleAddToCart = (product) => {
        dispatch(addItem(product));
        setAddedToCart((prevState) => ({ ...prevState, [product.name]: true }));
    };

    return (
        <div>
            {/* Implementa aquí el map de plantas y el botón con disabled={addedToCart[plant.name]} */}
        </div>
    );
}  
