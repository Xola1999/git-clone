/**
 * Improved version of the printGroceryList function.
 * @param {string[]} groceryItems - The list of grocery items to be printed.
 */
function printGroceryList(groceryItems) {
    console.log("Grocery List:");

    // Refactor the loop for better readability
    for (let item of groceryItems) {
        // Consider using template literals for string concatenation
        console.log(`* ${item}`);
    }
}

// Example usage:
const groceryList = ["Apples", "Bananas", "Milk"];
printGroceryList(groceryList);
