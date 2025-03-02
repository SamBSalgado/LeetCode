class Node:
    def __init__(self, key, val):
        self.key, self.val = key, val
        self.prev = self.next = None
        
class LRUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache_map = {}

        self.least_recent, self.most_recent = Node(0,0), Node(0,0)
        self.least_recent.next, self.most_recent.prev = self.most_recent, self.least_recent

    def remove(self, node):
        prev, nxt = node.prev, node.next
        prev.next, nxt.prev = nxt, prev

    def insert(self, node):
        prev, nxt = self.most_recent.prev, self.most_recent
        prev.next = nxt.prev = node
        node.next, node.prev = nxt, prev

    def get(self, key: int) -> int:
        if key in self.cache_map:
            #update the most recent use
            self.remove(self.cache_map[key])
            self.insert(self.cache_map[key])
            return self.cache_map[key].val
        else:
            return -1
    def put(self, key: int, value: int) -> None:
        if key in self.cache_map:
            self.remove(self.cache_map[key])
        self.cache_map[key] = Node(key, value)
        self.insert(self.cache_map[key])

        if len(self.cache_map) > self.capacity:
        #Evict LRU
            lru = self.least_recent.next
            self.remove(lru)
            del self.cache_map[lru.key]


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)