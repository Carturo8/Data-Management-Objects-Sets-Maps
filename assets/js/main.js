// Create an object with the product details
const products = {
    1: { id: 1, name: "Smartphone", price: 1200 },
    2: { id: 2, name: "Wireless Headphones", price: 450 },
    3: { id: 3, name: "Mechanical Keyboard", price: 700 },
    4: { id: 4, name: "4K Monitor", price: 1100 },
};

// Create a Set with the product names (unique values)
const setProducts = new Set(Object.values(products).map(product => product.name));

// Create a Map to assign categories to products
const mapProducts = new Map([
    ["Electronics", "Smartphone"],
    ["Audio", "Wireless Headphones"],
    ["Peripherals", "Mechanical Keyboard"],
    ["Displays", "4K Monitor"]
]);

function showObject() {
    const container = document.getElementById("object-container");
    container.innerHTML = ""; // Clear previous content

    const productList = document.createElement("ul");

    // Iterate through each product in the products object using its ID
    for (const id in products) {
        const productItem = document.createElement("li");
        productItem.textContent = `ID: ${products[id].id}, Name: ${products[id].name}, Price: $${products[id].price}`;

        // Append the list item to the main list
        productList.appendChild(productItem);
    }

    // Display the list in the container
    container.appendChild(productList);
}

function showSet() {
    const container = document.getElementById("set-container");
    container.innerHTML = ""; // Clear previous content

    const productList = document.createElement("ul");

    // Iterate through each unique product name in the Set
    for (const productName of setProducts) {
        const productItem = document.createElement("li");
        productItem.textContent = productName;

        // Append the list item to the main list
        productList.appendChild(productItem);
    }

    // Display the list in the container
    container.appendChild(productList);
}

function showMap() {
    const container = document.getElementById("map-container");
    container.innerHTML = ""; // Clear previous content

    const categoryList = document.createElement("ul");

    // Iterate through the Map of categories and their corresponding products
    mapProducts.forEach((productName, categoryName) => {
        const categoryItem = document.createElement("li");
        categoryItem.textContent = `Category: ${categoryName}, Product: ${productName}`;

        // Add the list item to the main category list
        categoryList.appendChild(categoryItem);
    });

    // Display the list in the container
    container.appendChild(categoryList);
}