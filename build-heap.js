// change this to no delete items

class MinHeap {
  constructor() {
    this.heap = [];
  }

  getMin() {
    return this.heap[0];
  }

  static getParentIndex(ci) {
    return Math.floor(ci - 1 / 2);
  }

  static getChildrenIndexes(pi) {
    return [((pi * 2) + 1), ((pi * 2) + 2)];
  }

  heapifyUp(ci) {
    const parentIndex = MinHeap.getParentIndex(ci);
    if (this.heap[ci] < this.heap[parentIndex]) {
      [this.heap[ci], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[ci]];
      this.heapifyUp(parentIndex);
    }
  }

  heapifyDown(pi) {
    const [leftIndex, rightIndex] = MinHeap.getChildrenIndexes(pi);
    const smallestChildIndex = leftIndex <= rightIndex ? leftIndex : rightIndex;
    if (this.heap[pi] > this.heap[smallestChildIndex]) {
      [this.heap[pi], this.heap[smallestChildIndex]] = [this.heap[smallestChildIndex], this.heap[pi]];
      this.heapifyDown(smallestChildIndex);
    }
  }

  insert(num) {
    const insertIndex = this.heap.length;
    this.heap.push(num);
    if (this.heap.length > 1) {
      this.heapifyUp(insertIndex);
    }

    return this.heap;
  }

  remove() {
    const lastIndex = this.heap.length - 1;
    this.heap[0] = this.heap[lastIndex];
    if (this.heap.length > 1) {
      this.heapifyDown(0);
    }
    this.heap.pop();
    return this.heap;
  }
}

module.exports = { MinHeap };

// get, insert, delete
const set1 = [2, 3, 5, 4, 8, 7, 6];
const set2 = [6, 8, 2, 4, 1];
const set3 = [1, 2, 3, 4, 5, 6, 7, 8];

const heap1 = new MinHeap();
set1.forEach(i => heap1.insert(i));
console.log('heap1 insert', heap1.heap);
heap1.remove();
console.log('heap1 delete', heap1.heap);

const heap2 = new MinHeap();
set2.forEach(i => heap2.insert(i));
console.log('heap2 insert', heap2.heap);
heap2.remove();
console.log('heap2 delete', heap2.heap);

const heap3 = new MinHeap();
set3.forEach(i => heap3.insert(i));
console.log('heap3 insert', heap3.heap);
heap3.remove();
console.log('heap3 delete', heap3.heap);

const heap4 = new MinHeap();
set3.reverse().forEach(i => heap4.insert(i));
console.log('heap4 insert', heap4.heap);
heap4.remove();
console.log('heap4 delete', heap4.heap);
