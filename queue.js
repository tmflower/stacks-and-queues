/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
    }
    this.last = newNode;
    this.size += 1;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size === 0) {
      throw new Error("Error: queue is empty");
    } 
    else {
      let val;
      while (this.first && this.last !== null) {
        let val = this.first.val;
        let newFirst = this.first.next;
        this.first = newFirst;
        this.size -= 1;
        return val;
      }
    this.first = null;
    this.size -= 1;
    return val;
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.size === 0) {
      throw new Error("Error: queue is empty");
    } 
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (this.size === 0) {
      return true;
    } 
    return false;
  }
}

module.exports = Queue;
