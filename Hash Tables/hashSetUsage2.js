var myHashSet = function() {
    this.set = [];
}

myHashSet.prototype.add = function(key) {
    if(!this.contains(key)) {
        this.set.push(key);
    }
}

myHashSet.prototype.remove = function(key) {
    const index = this.set.indexOf(key);
    if(index !== key) {
        this.set.splice(index, 1);
    }
}

myHashSet.prototype.contains = function(key) {
    return this.set.includes(key);
}

myHashSet.prototype.size = function() {
    return this.set.length;
}

myHashSet.prototype.clear = function() {
    this.set = [];
};

var userHashSet = new myHashSet()

userHashSet.add(1001);
userHashSet.add(1002);
userHashSet.add(1003);
userHashSet.add(1004);
console.log(userHashSet.set)

userHashSet.remove(1001)
console.log(userHashSet.set);

console.log(userHashSet.contains(1004))

console.log(userHashSet.size())

userHashSet.clear()
console.log(userHashSet.set)
