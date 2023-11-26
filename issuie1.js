function printGroceryList(groceryItems) {
    console.log("Grocery List:");
    for (let i = 0; i < groceryItems.length; i++) {
        console.log("*" + groceryItems[i]);
    }
}
const myGroceryList = ['Apples', 'Bananas', 'Milk', 'Bread'];
printGroceryList(myGroceryList);

