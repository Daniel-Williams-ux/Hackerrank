const reorderList = (items) => {

  const reorder = [...items];
  
    const temp = reorder[0];
    reorder[0] =  reorder[2];
    reorder[2] =  reorder[1];
    reorder[1] =  temp

  return reorder;
 
}

const items = ['A', 'B', 'C'];
const result =  reorderList(items)
console.log(result)


const reorderList = (items) => {
  const reorder = [...items];

  const indexOfB = reorder.indexOf('B');
  if (indexOfB !== -1) {
    reorder.splice(indexOfB, 1); // Remove 'B' from its current position
    reorder.unshift('B'); // Add 'B' to the beginning of the array
  }

  return reorder; // Return the modified array
};

const items = ['A', 'B', 'C'];
const result = reorderList(items);
console.log(result);

//If you want to reorder the items in your array ['A', 'B', 'C', 'D', 'E', 'F'] so that 'F' is at index 2, you can achieve this using the splice method as well. Here's how you can do it:

const items = ['A', 'B', 'C', 'D', 'E', 'F'];
const desiredIndex = 2;

if (desiredIndex >= 0 && desiredIndex < items.length) {
  const itemToMove = items.pop(); // Remove the last element ('F')
  items.splice(desiredIndex, 0, itemToMove); // Insert 'F' at the desired index

  console.log(items); // The reordered array
} else {
  console.log("Desired index is out of range.");
}

//If you want to move the element 'E' to index 2 in your array ['A', 'B', 'C', 'D', 'E', 'F'], you can achieve this using the splice method. Here's how:

const items = ['A', 'B', 'C', 'D', 'E', 'F'];
const elementToMove = 'E';
const desiredIndex = 2;

// Find the index of the element to move
const indexOfElement = items.indexOf(elementToMove);

if (indexOfElement !== -1) {
  items.splice(indexOfElement, 1); // Remove 'E' from its current position
  items.splice(desiredIndex, 0, elementToMove); // Insert 'E' at the desired index

  console.log(items); // The reordered array
} else {
  console.log("Element not found in the array.");
}
