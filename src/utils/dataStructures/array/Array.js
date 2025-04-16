class Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  /**
   * @description: Get the item at the specified index
   * @param {number} index - The index of the item to retrieve
   * @return {*} - The item at the specified index
   */
  get(index) {
    return this.data[index];
  }

  /**
   * @description: Push an item to the end of the array
   * @param {*} item - The item to push
   * @return {number} - The new length of the array
   */
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  /**
   * @description: Pop the last item from the array
   * @return {*} - The last item in the array
   */
  pop() {
    const item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  /**
   * @description: Delete an item at the specified index
   * @param {number} index - The index of the item to delete
   * @return {*} - The deleted item
   */
  delete(index) {
    if (index < 0 || index >= this.length) {
      return undefined; // Index out of bounds
    }

    for (let i = index + 1; i < this.length; i++) {
      this.data[i - 1] = this.data[i];
    }

    const deletedItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;

    return deletedItem;
  }

  /**
   * @description: Get the length of the array
   * @return {number} - The length of the array
   */
  size() {
    return this.length;
  }

  /**
   * @description: Print the array
   * @return {string} - The string representation of the array
   */
  print() {
    let result = "[";
    for (let i = 0; i < this.length; i++) {
      result += this.data[i];
      if (i < this.length - 1) {
        result += ", ";
      }
    }
    result += "]";
    return result;
  }

  /**
   * @description: Test the array implementation
   * @return {void}
   */
  test() {
    console.log("Array test");
    console.log("Initial length:", this.length);
    console.log("Push 1:", this.push(1));
    console.log("Push 2:", this.push(2));
    console.log("Push 3:", this.push(3));
    console.log("Array after pushes:", this.print());
    console.log("Pop:", this.pop());
    console.log("Array after pop:", this.print());
    console.log("Delete index 0:", this.delete(0));
    console.log("Array after delete:", this.print());
  }
  
  /**
   * @description: Get the array data
   * @return {object} - The array data
   */
  getData() {
    return this.data;
  }
}

export default Array;