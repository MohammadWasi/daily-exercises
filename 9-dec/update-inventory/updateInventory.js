
function updateInventory(...args) {
    const [oldInventory, newInventory] = args;
  
    if(oldInventory.length === 0) {
      return newInventory;
    }
    if(newInventory.length === 0) {
      return oldInventory;
    }
    const inventoryObject = {};
      oldInventory.forEach((item) => {
        inventoryObject[item[1]] = item[0];
      });
      newInventory.forEach((item) => {
        if(inventoryObject[item[1]]) {
          inventoryObject[item[1]] += item[0];
        } else {
          inventoryObject[item[1]] = item[0];
        }
      });
      let updatedInventory = [];
      for (const key in inventoryObject) {
        updatedInventory.push([inventoryObject[key], key]);
      }
      return updatedInventory;
  }
  
  export {
    updateInventory,
  };