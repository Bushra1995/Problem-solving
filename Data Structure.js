// // Q1

// class MinStack {
//     constructor() {
//       this.stack = [];
//       this.minStack = [];
//     }

//     push(val) {
//       this.stack.push(val);
//       if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
//         this.minStack.push(val);
//       }
//     }

//     pop() {
//       const val = this.stack.pop();
//       if (val === this.minStack[this.minStack.length - 1]) {
//         this.minStack.pop();
//       }
//       return val;
//     }

//     getMin() {
//       if (this.minStack.length === 0) {
//         return null; // or throw an error
//       }
//       return this.minStack[this.minStack.length - 1];
//     }
//   }







//   //Q2

//   function reverseQueue(queue) {
//     const stack = [];
//     while (queue.length > 0) {
//       stack.push(queue.shift());
//     }
//     while (stack.length > 0) {
//       queue.push(stack.pop());
//     }
//     return queue;
//   }


//   const queue = [1, 2, 3, 4, 5];
// reverseQueue(queue);
// console.log(queue); // [5, 4, 3, 2, 1]






// //Q3  way no.1

// class Queue {
//     constructor() {
//       this.s1 = [];
//       this.s2 = [];
//     }

//     enqueue(val) {
//       this.s1.push(val);
//     }

//     dequeue() {
//       if (this.s2.length === 0) {
//         while (this.s1.length > 0) {
//           this.s2.push(this.s1.pop());
//         }
//       }
//       if (this.s2.length === 0) {
//         return null; // or throw an error
//       }
//       return this.s2.pop();
//     }
//   }


//   const q = new Queue();
// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// console.log(q.dequeue()); // 1
// console.log(q.dequeue()); // 2
// console.log(q.dequeue()); // 3
// console.log(q.dequeue()); // null


// way no.2
// class StackQ3 {

//   constructor(){
//       this.items = [];
//       this.count = 0;
//   }
  
//   // add element to top of the stack
//   push(element) {
//       this.items[this.count] = element;
//       this.count++;
//       console.log(`${element} added to ${this.count}`);
//       return this.count -1
//   }
  
//   // print elements 
//   print(){
//     return this.items;
//   }
//   }
  
//   const stack1 =new StackQ3();
//   const stack2 =new StackQ3();
 
//   stack1.push(100);
//   stack1.push(200);
//   stack1.push(300);
//   let s1=stack1.print() 


//   stack2.push(400);
//   stack2.push(500);
//   stack2.push(600);
//   let s2=stack2.print()

// // queue elements
//     class QueueQ3 {
//         constructor() {
//             this.items = []
//             this.frontIndex = 0
//             this.backIndex = 0
//         }
//         queue(item) {
//          this.items.push.apply(this.items, item)
//             this.backIndex++
//             return item + ' inserted'
//         }

//          printQueue() {
//             return this.items;
//         }
//     }
//     const queueQ3 = new QueueQ3()
  
//     console.log(queueQ3.queue(s1))
//     console.log(queueQ3.queue(s2))

//   console.log(queueQ3.printQueue())






// // Q4 

//   class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//     }
//   }

//   class LinkedList {
//     constructor() {
//       this.head = null;
//       this.tail = null;
//       this.length = 0;
//     }

//     addNode(data) {
//       const new_node = new Node(data);
//       if (!this.head) {
//         this.head = new_node;
//         this.tail = this.head;
//       } else {
//         this.tail.next = new_node;
//         this.tail = new_node;
//       }
//       this.length++;
//     }

//     deleteMiddleNode() {
//       if (this.length < 2) {
//         return this.head;
//       }
//       const middle = Math.floor(this.length / 2);
//       let prevNode = null;
//       let currNode = this.head;
//       for (let i = 0; i < middle; i++) {
//         prevNode = currNode;
//         currNode = currNode.next;
//       }
//       // console.log(prevNode.next );
//       prevNode.next = currNode.next;
      
//       this.length--;
//       return this.head;
//     }
//   }

// const linkedList = new LinkedList();
// linkedList.addNode(1);
// linkedList.addNode(2);
// linkedList.addNode(3);
// linkedList.addNode(4);
// linkedList.addNode(5);

// // Before deleting middle node
// console.log(linkedList); 

// linkedList.deleteMiddleNode();

// console.log(linkedList); 






// Q5  way no.1

// class ListNode {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }

// }

// class LinkedList {
//     constructor(head = null) {
//         this.head = head;
//     } 



//       reverse(node1) {
//         var prev = null;
//         var current = node1;
//         var next = null;
//             while (current != null) {
//                 next = current.next;
//                 current.next = prev;
//                 prev = current;
//                 current = next;
//             }
//             node1 = prev;
//             return node1;
//         }
//         }
// let node1 = new LinkedList(1);
// let node2 = new LinkedList(2);
// let node3 = new LinkedList(3);

// node1.next = node2;
// node2.next = node3;

// let list = new LinkedList(node1);

// console.log(list);

// console.log(list.reverse(node1));


// way no.2

class Node {
  constructor(val) {
      this.data = val;
      this.next = null;
  }
}

/* Function to reverse the linked list */
function reverse(node) {
let prev = null;
let current = node;
let next = null;
  while (current != null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;

  }
  node = prev;
  return node;
}

// prints content of double linked list
function printList(node) {
  while (node != null) {
      console.log(node.data + " ");
      node = node.next;
  }
}

// Driver Code

  head = new Node(10);
  head.next = new Node(20);
  head.next.next = new Node(30);
  head.next.next.next = new Node(40);
  head.next.next.next.next = new Node(50);
  console.log("Given linked list");
  printList(head);
  head = reverse(head);
  console.log("Reversed linked list ");
  printList(head);