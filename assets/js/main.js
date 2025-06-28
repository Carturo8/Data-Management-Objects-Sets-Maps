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

    for (const id in products) {
        const productItem = document.createElement("li");

        // Create and set content for product ID
        const productId = document.createElement("p");
        productId.textContent = `ID: ${products[id].id}`;

        // Create and set content for the product name
        const productName = document.createElement("p");
        productName.textContent = `Name: ${products[id].name}`;

        // Create and set content for the product price
        const productPrice = document.createElement("p");
        productPrice.textContent = `Price: $${products[id].price}`;

        // Append product info to the list item
        productItem.appendChild(productId);
        productItem.appendChild(productName);
        productItem.appendChild(productPrice);

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
    // Recorrer el Map de products
    mapProducts.forEach((product, category) => {
        console.log(`Category: ${category}, Product: ${product}`);
    });
}

// console.log("Pruebas completas de gestión de datos:");
// console.log("Lista de products (Object):", products);
// console.log("Lista de products únicos (Set):", setProducts);
// console.log("Categorías y products (Map):", mapProducts);