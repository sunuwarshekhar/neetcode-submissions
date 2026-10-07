class Node {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.next = null
        this.prev = null
    }
}
class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.map = new Map()
        this.head = new Node(0,0)
        this.tail = new Node(0, 0)
        this.head.next = this.tail
        this.tail.prev = this.head
    }
    //popping out from double linkedlist
    _remove(node){
        node.prev.next = node.next
        node.next.prev = node.prev
    }
    _appendLatest(node){
        node.next = this.head.next
        node.prev = this.head
        //re-attaching after popping node
        this.head.next.prev = node
        this.head.next = node
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(!this.map.has(key)){
            return -1 
        }
        const node = this.map.get(key)
        this._remove(node)
        this._appendLatest(node)
        return node.value
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.has(key)){
            const node = this.map.get(key)
            this._remove(node)
        }
        const node = new Node(key,value)
        this.map.set(key, node)
        this._appendLatest(node)

        if(this.map.size > this.capacity){
            const oldest = this.tail.prev
            this._remove(oldest)
            this.map.delete(oldest.key)
        }
    }
}
