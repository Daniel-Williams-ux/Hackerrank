var MyHashMap = function() {
    this.bucketSize = 1000;
    this.buckets = new Array(this.bucketSize).fill(null).map(() => []);
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    const index = key % this.bucketSize;
    const bucket = this.buckets[index];
    
    for (const pair of bucket) {
        if (pair[0] === key) {
            pair[1] = value
            return;
        }
    }
    bucket.push([key, value])
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    const index = key % this.bucketSize;
    const bucket = this.buckets[index];
    
    for (const pair of bucket) {
        if (pair[0] === key) {
            return pair[1]
        }
    }
    return -1
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    const index = key % this.bucketSize;
    const bucket = this.buckets[index];
    
    for (const pair of bucket) {
        const innerIndex = bucket.indexOf(pair);
        
        if (pair[0] === key) {
            bucket.splice(innerIndex, 1)
            return;
        }
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
