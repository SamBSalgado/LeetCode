/*
LRU CACHE
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.

 

Example 1:

Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
 

Constraints:

1 <= capacity <= 3000
0 <= key <= 10k
0 <= value <= 100k
At most 200k calls will be made to get and put.
*/

class LRUCache {
  private capacity: number;
  private cache: Map<number, number>;

  constructor(capacity: number) {
    if (capacity < 1 || capacity > 3000) {
      throw new Error("Capacity must be between 1 and 3k");
    }
    this.capacity = capacity;
    this.cache = new Map();    
  }

  get(key: number): number {
    if (!this.cache.has(key)) {//si no existe, -1
      return -1;
    }

    //En caso de sí tenerla, la mueve al final (más reciente)
    const temp = this.cache.get(key)!;
    this.cache.delete(key);
    this.cache.set(key, temp);
    return temp; 
  }

  put(key: number, value: number): void {
    if (key < 0 || key > 10000) {
      throw new Error("Key must be between 0 and 10k");
    }

    if (value < 0 || value > 100000) {
      throw new Error("Value must be between 0 and 100k");
    }

    if (this.cache.has(key)) { //si ya existe, lo elimina
      this.cache.delete(key);
    } else if (this.cache.size == this.capacity) { //si no existía y no hay más memoria
      //elimina la clave mas vieja
      const [oldestKey] = this.cache.keys();
      this.cache.delete(oldestKey);
    }
    this.cache.set(key, value);
  }
}

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/