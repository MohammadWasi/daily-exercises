export default class Linkedist {
  constructor(value) {
    this.head = null;
    this.length = 0;
    this.tail = null;
  }
  addToHead(val) {
    const newNode = { val };
    newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
    return this;
  }
  removeFromHead() {
    if (this.length === 0) {
      return undefined;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.length -= 1;
    return value;
  }
  findByVal(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.val === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  removeItem(val) {
    if (this.head.val === val) {
      this.head = null;
      return this;
    }
    let preNode = this.head;
    let currentNode = preNode.next;

    while (currentNode) {
      if (currentNode.val === val) {
        preNode.next = currentNode.next;
        this.length -= 1;
        break;
      }
      preNode = currentNode.next;
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}
