/*
Merge k Sorted Singly Linked Lists
Given k singly linked lists where each linked list is sorted in ascending order,
merge all of them into a single sorted linked list.

Example:
  Input: [ [1 -> 3 -> 5], [3 -> 4], [7] ].
  Output: 1 -> 3 -> 3 -> 4 -> 5 -> 7
*/


/*
    const SinglyLinkedListNode = class {
        constructor(nodeData) {
            this.data = nodeData;
            this.next = null;
        }
    };

    The function accepts an ARRAY OF SinglyLinkedListNodes and is expected
    to return a SinglyLinkedListNode.

    Complete the function below.
*/
function mergeKLists(lists) {
  const mergedList = [];

  for (let i = 0; i < lists.length; i++) {
    let node = lists[i];
    while (node) {
      mergedList.push(node.data);
      node = node.next;
    }
  }

  mergedList.sort((a, b) => a - b);
  // what is returned must be the root of the linked list
  return { data: mergedList.join(' ') };
}

/*
This is not an optimal solution
if we used a heap we could add the root of all lists into a min heap and each time
we removed one we would add the next element
*/
