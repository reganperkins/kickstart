/*
Given two dom trees with root nodes X and Y and an element p in X, find the
corresponding element q in Y.  Elements p and q are at the same level from
their root in both the trees.
*/

/*
questions:
- can you show an example input?
- what should we return? the array index?
- 
*/

const x = [];
const y = [];

function helper(tree, target, depth) {
  
}

function findCorrespondingNode(x, y, target) {
  if (x === target) {
    return y;
  }

  const path = [];
  let node = target;

  while (node !== x) {
    const parent = node.parentElement;
    const children = Array.from(parent.children);
    const index = children.indexOf(node);
    path.push(index);
    node = parent;
  }

  let current = null;
  while (path.length) {
    const index = path.pop();
    y.
  }  
}

// const findCorrespondingElement = function( x, y, target ) {
//   if (x === target) {
//     return y;
//   }

//   const path = [];
//   let node = target;

//   while (node !== x) {
//     const parent = node.parentElement
//     const children = Array.from(parent.children)
//     const index = children.indexOf(node)
//     path.push(index)
//     node = parent
//   }
//   return path.reduceRight((result, index) => result.children[index],  y)
// }