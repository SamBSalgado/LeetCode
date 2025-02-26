import java.util.HashMap;
import java.util.Map;

class LRUCache {

    private static class Node {
        int key;
        int value;
        Node prev;
        Node next;

    }

    private Map<Integer, Node> cache;
    private Node start;
    private Node end;
    private int size;

    public LRUCache(int capacity) {
        this.size = capacity;
        cache = new HashMap<>();
        start = new Node();
        end = new Node();
        this.start.next = this.end;
        this.end.prev = this.start;
    }

    public int get(int key) {
        if (!cache.containsKey(key)) {
            return -1;
        }

        Node node = cache.get(key);
        deleteNode(node);
        addFront(node);
        return node.value;

    }

    public void put(int key, int value) {
        if (cache.containsKey(key)) {
            Node node = cache.get(key);
            node.value = value;
            deleteNode(node);
            addFront(node);
        } else {
            Node newnode = new Node();
            newnode.key = key;
            newnode.value = value;
            cache.put(key, newnode);
            addFront(newnode);
            if (cache.size() > size) {
                Node lru = end.prev;
                deleteNode(lru);
                cache.remove(lru.key);
            }
        }
    }

    private void deleteNode(Node node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    private void addFront(Node node) {
        node.prev = this.start;
        node.next = this.start.next;
        this.start.next.prev = node;
        this.start.next = node;
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */