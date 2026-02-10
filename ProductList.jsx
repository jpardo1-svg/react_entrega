import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

function ProductList() {
    const dispatch = useDispatch();
    const [addedToCart, setAddedToCart] = useState({});

    const plantsArray = [
        {
            category: "Air Purifying",
            plants: [
                { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", cost: "$15" },
                { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", cost: "$12" },
                { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lily-4269365_1280.jpg", cost: "$18" },
                { name: "Boston Fern", image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/fern-5114414_1280.jpg", cost: "$20" },
                { name: "Rubber Plant", image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg", cost: "$22" },
                { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/aloe-3283036_1280.jpg", cost: "$10" }
            ]
        },
        {
            category: "Aromatic",
            plants: [
                { name: "Lavender", image: "https://cdn.pixabay.com/photo/2017/07/10/19/51/lavender-2491254_1280.jpg", cost: "$15" },
                { name: "Rosemary", image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg", cost: "$10" },
                { name: "Mint", image: "https://cdn.pixabay.com/photo/2016/01/07/18/20/mint-1126282_1280.jpg", cost: "$8" },
                { name: "Basil", image: "https://cdn.pixabay.com/photo/2016/07/24/20/48/basil-1539202_1280.jpg", cost: "$9" },
                { name: "Thyme", image: "https://cdn.pixabay.com/photo/2016/11/14/19/57/thyme-1824471_1280.jpg", cost: "$11" },
                { name: "Jasmine", image: "https://cdn.pixabay.com/photo/2017/08/07/14/04/jasmine-2604185_1280.jpg", cost: "$25" }
            ]
        },
        {
            category: "Insect Repellent",
            plants: [
                { name: "Marigold", image: "https://cdn.pixabay.com/photo/2018/07/23/18/14/marigold-3557454_1280.jpg", cost: "$12" },
                { name: "Geranium", image: "https://cdn.pixabay.com/photo/2017/07/03/17/04/geranium-2468352_1280.jpg", cost: "$14" },
                { name: "Citronella", image: "https://cdn.pixabay.com/photo/2016/09/27/15/45/plant-1698717_1280.jpg", cost: "$16" },
                { name: "Chrysanthemum", image: "https://cdn.pixabay.com/photo/2019/09/25/11/17/chrysanthemum-4503370_1280.jpg", cost: "$15" },
                { name: "Petunia", image: "https://cdn.pixabay.com/photo/2017/04/27/10/36/petunia-2265057_1280.jpg", cost: "$13" },
                { name: "Lemongrass", image: "https://cdn.pixabay.com/photo/2017/05/29/18/16/lemongrass-2354518_1280.jpg", cost: "$10" }
            ]
        }
    ];

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
        setAddedToCart((prevState) => ({ ...prevState, [plant.name]: true }));
    };

    return (
        <div className="product-grid">
            {plantsArray.map((category) => (
                <div key={category.category}>
                    <h1>{category.category}</h1>
                    <div className="product-list">
                        {category.plants.map((plant) => (
                            <div className="product-card" key={plant.name}>
                                <img src={plant.image} alt={plant.name} />
                                <h3>{plant.name}</h3>
                                <p>{plant.cost}</p>
                                <button 
                                    className="add-to-cart-button"
                                    disabled={addedToCart[plant.name]} 
                                    onClick={() => handleAddToCart(plant)}
                                >
                                    {addedToCart[plant.name] ? "Agregado" : "Añadir al carrito"}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
