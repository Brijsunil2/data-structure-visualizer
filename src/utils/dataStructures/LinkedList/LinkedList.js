class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  /** Returns the value of the node.
   * @returns {any} The value of the node.
   */
  getValue() {
    return this.value;
  }

  /** Sets the value of the node.
   * @param {any} value - The new value to set.
   */
  setValue(value) {
    this.value = value;
  }

  /** Returns the next node in the list.
   * @returns {LinkedListNode|null} The next node or null if there is no next node.
   */
  getNext() {
    return this.next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /** Adds a new node with the given value to the end of the list.
   * @param {any} value - The value to add.
   * @returns {LinkedListNode} The inserted node.
   */
  append(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;

    return newNode;
  }

  /** Adds a new node with the given value to the start of the list.
   * @param {any} value - The value to add.
   * @returns {LinkedListNode} The inserted node.
   */
  prepend(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.size++;

    return newNode;
  }

  /** Adds a new node with the given value and index
   * @param {any} value - The value to add.
   * @param {number} index - The index to insert the new node at.
   * @returns {LinkedListNode|null} The inserted node or null if the index is out of bounds.
   */
  insert(value, index) {
    if (index < 0 || index > this.size) {
      throw new Error("Index out of bounds");
    }

    const newNode = new LinkedListNode(value);

    if (index === 0) {
      this.prepend(value);
    } else if (index === this.size) {
      this.append(value);
    } else {
      let curr = this.head;
      let prev = null;

      let i = 0;
      while (i < index) {
        prev = curr;
        curr = curr.next;
        i++;
      }

      prev.next = newNode;
      newNode.next = curr;
    }

    this.size++;

    return newNode;
  }

  /** Removes the node at the given index.
   * @param {number} index - The index of the node to remove.
   * @returns {LinkedListNode|null} The removed node or null if the index is out of bounds.
   */
  remove(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds");
    }

    let curr = this.head;
    let prev = null;

    let i = 0;
    while (i < index) {
      prev = curr;
      curr = curr.next;
      i++;
    }
    
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else if (index === 0) { 
      this.head = curr.next;
    } else if (index === this.size - 1) { 
      this.tail = prev;
      this.tail.next = null;
    } else {
      prev.next = curr.next;
    }
    this.size--;

    curr.next = null;
    return curr;
  }
  
  /** Returns the node at the given index.
   * @param {number} index - The index of the node to get.
   * @returns {LinkedListNode|null} The node or null if the index is out of bounds.
   */
  get(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Index out of bounds");
    }

    let curr = this.head;
    let i = 0;
    while (i < index) {
      curr = curr.next;
      i++;
    }

    return curr;
  }

  /** Returns the length of the linked list.
   * @param {number} index - The index of the node to get.
   * @returns {LinkedListNode|null} The node or null if the index is out of bounds.
   */
  getLength() {
    return this.size;
  }

  /** Prints the linked list to console.
   * @returns {void} 
   * */
  print() {
    let curr = this.head;
    const values = [];

    while (curr) {
      values.push(curr.getValue());
      curr = curr.getNext();
    }

    console.log(values.join(" -> "));
  }

    /**
   * @description: Test the linked list implementation
   * @return {void}
   */
  test() {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    console.log(list.print()); // 1 -> 2 -> 3
    console.log(list.get(0).getValue()); // 1
    console.log(list.get(1).getValue()); // 2
    console.log(list.get(2).getValue()); // 3
    console.log(list.getLength()); // 3
    list.remove(1);
    console.log(list.get(0).getValue()); // 1
    console.log(list.get(1).getValue()); // 3
    console.log(list.getLength()); // 2
  }
}

export default LinkedList;