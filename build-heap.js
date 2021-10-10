class MinHeap {
  constructor() {
    this.arr = [];
  }

  getMin() {
    return this.arr[0];
  }

  static getParentIndex(ci) {
    return Math.floor(ci - 1 / 2);
  }

  static getChildrenIndexes(pi) {
    return [((pi * 2) + 1), ((pi * 2) + 2)];
  }

  heapifyUp(ci) {
    const parentIndex = MinHeap.getParentIndex(ci);
    if (this.arr[ci] < this.arr[parentIndex]) {
      [this.arr[ci], this.arr[parentIndex]] = [this.arr[parentIndex], this.arr[ci]];
      this.heapifyUp(parentIndex);
    }
  }

  heapifyDown(pi) {
    const [leftIndex, rightIndex] = MinHeap.getChildrenIndexes(pi);
    const smallestChildIndex = leftIndex <= rightIndex ? leftIndex : rightIndex;
    if (this.arr[pi] > this.arr[smallestChildIndex]) {
      [this.arr[pi], this.arr[smallestChildIndex]] = [this.arr[smallestChildIndex], this.arr[pi]];
      this.heapifyDown(smallestChildIndex);
    }
  }

  insert(num) {
    const insertIndex = this.arr.length;
    this.arr.push(num);
    if (this.arr.length > 1) {
      this.heapifyUp(insertIndex);
    }

    return this.arr;
  }

  remove() {
    const lastIndex = this.arr.length - 1;
    this.arr[0] = this.arr[lastIndex];
    if (this.arr.length > 1) {
      this.heapifyDown(0);
    }
    this.arr.pop();
    return this.arr;
  }
}

// get, insert, delete
const set1 = [2, 3, 5, 4, 8, 7, 6];
const set2 = [6, 8, 2, 4, 1];
const set3 = [1, 2, 3, 4, 5, 6, 7, 8];

const heap1 = new MinHeap();
set1.forEach(i => heap1.insert(i));
console.log('heap1 insert', heap1.arr);
heap1.remove();
console.log('heap1 delete', heap1.arr);

const heap2 = new MinHeap();
set2.forEach(i => heap2.insert(i));
console.log('heap2 insert', heap2.arr);
heap2.remove();
console.log('heap2 delete', heap2.arr);

const heap3 = new MinHeap();
set3.forEach(i => heap3.insert(i));
console.log('heap3 insert', heap3.arr);
heap3.remove();
console.log('heap3 delete', heap3.arr);

const heap4 = new MinHeap();
set3.reverse().forEach(i => heap4.insert(i));
console.log('heap4 insert', heap4.arr);
heap4.remove();
console.log('heap4 delete', heap4.arr);
