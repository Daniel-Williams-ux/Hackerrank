// 1. Initialize the hash set
let hashSet = new Set();

// 2. Add new keys
hashSet.add(3);
hashSet.add(2);
hashSet.add(1);

// 3. Remove a key
hashSet.delete(2);

// 4. Check if the key is in the hash set
if (!hashSet.has(2)) {
    console.log("Key 2 is not in the hash set.");
}

// 5. Get the size of the hash set
console.log("Size of hashSet is:", hashSet.size);

// 6. Iterate the hash set
for (let x of hashSet) {
    console.log(x);
}
console.log("are in the hash set.");

// 7. Clear the hash set
hashSet.clear();
console.log("Size of hashSet:", hashSet.size);
