//Creating the HashSet:
//We start by setting up our HashSet, which in this case is like an empty box that we'll use to store keys.
var myHashSet = function () {
    this.set = [];
}
//Here, this.set = [] creates an empty list that will serve as our HashSet.

//Adding a Key:

//We want to add keys into our HashSet. When we add a key, we'll put it into our box if it's not already there.
myHashSet.prototype.add = function(key) {
    if(!this.constans(key)) {
        this.set.push(key);
    }
}
//Here, this.set.push(key) puts a key into our box (array) only if it's not already there. The contains function checks if the key already exists in our box.

//Removing a Key:
//If we want to take a key out of our HashSet, we look for it in the box and remove it if it's there.
myHashSet.prototype.remove = function(key) {
    const index = this.set.indexOf(key)
    if (index !== -1) {
        this.set.splice(index, 1)
    }
}
//The indexOf function looks for the key in our box. If it's found (index !== -1), we use splice to take it out of the box.

//Checking if a Key Exists:
//We can check if a key is already in our HashSet or not.
myHashSet.prototype.contains = function(key) {
    return this.set.includes(key);
}

//The includes function tells us if the key is already in our box. It gives back a true or false answer.

//That's it! You've made your own simple HashSet using an array. You can use it to add keys, remove keys, and check if a key is already in your HashSet or not.
