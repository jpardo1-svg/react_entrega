const plantsArray = [
    {
        category: "Air Purifying",
        plants: [
            { name: "Snake Plant", image: "https://...", cost: "$15" },
            { name: "Spider Plant", image: "https://...", cost: "$12" },
            { name: "Peace Lily", image: "https://...", cost: "$18" },
            { name: "Boston Fern", image: "https://...", cost: "$20" },
            { name: "Rubber Plant", image: "https://...", cost: "$22" },
            { name: "Aloe Vera", image: "https://...", cost: "$10" }
        ]
    },
    // REPITE esto para otras 2 categorías (Aromatic, Insect Repellent)
];

// Lógica del botón dentro del return:
{category.plants.map((plant) => (
  <div key={plant.name}>
    <img src={plant.image} alt={plant.name} />
    <h3>{plant.name}</h3>
    <p>{plant.cost}</p>
    <button 
      disabled={addedToCart[plant.name]} 
      onClick={() => handleAddToCart(plant)}
    >
      {addedToCart[plant.name] ? "Added" : "Add to Cart"}
    </button>
  </div>
))}
