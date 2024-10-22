
class Item {
    constructor(id, name, quantity, price) {
      this.id = id;
      this.name = name;
      this.quantity = quantity;
      this.price = price;
    }
  }
  
  function addItem(inventory, item) {    // Add item 

    inventory.push(item);
  }
  
  function updateItem(inventory, id, newDetails) {                        // Update item 
    const item = inventory.find(item => item.id === id);
    if (item) {
      Object.assign(item, newDetails);
    } else {
      console.log(`Item with id ${id} not found.`);
    }
  }
  
  function deleteItem(inventory, id) {                                   // Delete item
    const index = inventory.findIndex(item => item.id === id);
    if (index !== -1) {
      inventory.splice(index, 1);
    } else {
      console.log(`Item with id ${id} not found.`);
    }
  }
  
  function getItem(inventory, id) {                               // Get item by id
    return inventory.find(item => item.id === id) || `Item with id ${id} not found.`;
  }
  
  // Print 
  function printInventory(inventory) {
    console.log(JSON.stringify(inventory, null, 2));
  }
  
  
  
  let inventory = [
    new Item(1, 'Apple', 10, 0.5),
    new Item(2, 'Banana', 20, 0.2),
    new Item(3, 'orange', 10, 0.5),
    new Item(4, 'guava', 20, 0.2),
    new Item(5, 'carrot', 10, 0.5),
    new Item(6, 'grapes', 20, 0.2)

  ];
  
  console.log('Initial Inventory:');
  printInventory(inventory);
  
  // Adding an item
  addItem(inventory, new Item(7, 'papaya', 15, 0.7));
  console.log('\nAdding item:');
  printInventory(inventory);
  
  // Updating an item
  updateItem(inventory, 2, { quantity: 30 });
  console.log('\nUpdating item:');
  printInventory(inventory);
  
  // Deleting an item
  deleteItem(inventory, 2);
  console.log('\nDeleting item:');
  printInventory(inventory);
  
  // Getting an item
  console.log('\nGetting item with id 1:');
  console.log(getItem(inventory, 1));

  console.log('\nGetting item with id 6:');
  console.log(getItem(inventory, 6));
  