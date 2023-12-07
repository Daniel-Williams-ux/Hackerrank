// Define the myHashSet constructor
var myHashSet = function() {
    this.set = [];
}

myHashSet.prototype.add = function(key) {
    if (!this.contains(key)) {
        this.set.push(key);
    }
}

myHashSet.prototype.remove = function(key) {
    const index = this.set.indexOf(key);
    if (index !== -1) {
        this.set.splice(index, 1);
    }
}

myHashSet.prototype.contains = function(key) {
    return this.set.includes(key);
}

// Now you can use the myHashSet constructor and its methods
var userHashSet = new myHashSet();

// Example usage
userHashSet.add(1001);
userHashSet.add(1002);
userHashSet.add(1003);

console.log(userHashSet.set); // Output: [1001, 1002, 1003]

userHashSet.remove(1002);
console.log(userHashSet.set); // Output: [1001, 1003]

console.log(userHashSet.contains(1002)); // Output: false
