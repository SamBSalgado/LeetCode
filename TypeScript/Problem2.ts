/*
146. LRU CACHE
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
Go to LeetCodde and look for the problem #146, and read the instructions to understand this better.
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
    this.cache.set(key, value); //vuelve a insertar la key preexistente para actualizarla al lugar mas reciente
  }
}

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/