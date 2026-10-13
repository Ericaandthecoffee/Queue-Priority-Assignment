class ArrayQueue{
    constructor(capacity){
        this.item = new Array(capacity);
        this.capacity = capacity;
        this.front = 0;
        this.rear = 0;
        this.size = 0;

    }

    enqueue(element){
        if (this.size === this.capacity){
            throw new Error("Queue is full");
        }

        this.item[this.rear] = element;
        this.rear = (this.rear + 1) % this.capacity;
        this.size++;
    }

    dequeue(){
        if (this.isEmpty()){
            throw new Error ("Queue is empty");
        }

        const element = this.item[this.front];
        this.item[this.front] = undefined;
        this.front = (this.front + 1) % this.capacity;
        this.size--;
        

        return element;

        
    }

    isEmpty(){
        return this.size === 0;

    }

    peek(){
        if(this.isEmpty()){
            throw new Error("Queue is empty");
        }
        return this.item[this.front];
    }
}

//TESTING

const queue = new ArrayQueue(3);

queue.enqueue("Patient A");
queue.enqueue("Patient B");
queue.enqueue("Patient C");

console.log("Front element", queue.peek());
console.log("Remove:", queue.dequeue());
console.log("Next Element:", queue.peek());
console.log("Is queue empty?", queue.isEmpty());

class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedListQueue {
    constructor(){
        this.front = null;
        this.rear = null;
        this.size = 0;
    }
    enqueue(element){
        
        const newNode = new Node(element);

        if (this.isEmpty()){
            this.front = newNode;
            this.rear = newNode;
        } else{
            this.rear.next = newNode;
            this.rear = newNode;

        }
        this.size++
    }
    isEmpty(){
            return this.size === 0;
    }
     peek(){
        if(this.isEmpty()){
            throw new Error("Queue is empty");
        }
        return this.front.element;
     }

     dequeue(){
        if(this.isEmpty()){
            throw new Error("Queue is empty");
        }
        const element = this.front.element;
        this.front = this.front.next;
        this.size--;

        if (this.isEmpty()){
            this.rear = null;
        }
        return element;
     }
}

//TESTING
const linkedQueue = new LinkedListQueue();

linkedQueue.enqueue("Patient A");
linkedQueue.enqueue("Patient B");
linkedQueue.enqueue("Patient C");

console.log("First patient:", linkedQueue.peek());
console.log("Removed:", linkedQueue.dequeue());
console.log("New first patient:", linkedQueue.peek());
console.log("Is queue empty?", linkedQueue.isEmpty());

console.log("Removed:", linkedQueue.dequeue());
console.log("Removed", linkedQueue.dequeue());
console.log("Is queue empty now?", linkedQueue.isEmpty());

console.log("Front:", linkedQueue.front);
console.log("Rear:", linkedQueue.rear);



            


class MinHeapPriorityQueue {
    constructor() {
        this.heap = [];
    }

    insert(element) {
        this.heap.push(element);

        let index = this.heap.length - 1;

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            if (this.heap[parentIndex] <= this.heap[index]) {
                break;
            }

            // Swap the parent and child
            [this.heap[parentIndex], this.heap[index]] =
                [this.heap[index], this.heap[parentIndex]];

            index = parentIndex;
        }
    }

    peekMin() {
        if (this.isEmpty()) {
            throw new Error("Priority queue is empty");
        }

        return this.heap[0];
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    extractMin() {
        if (this.isEmpty()) {
            throw new Error("Priority queue is empty");
        }

        const min = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;

            let index = 0;

            while (true) {
                const left = 2 * index + 1;
                const right = 2 * index + 2;
                let smallest = index;

                if (
                    left < this.heap.length &&
                    this.heap[left] < this.heap[smallest]
                ) {
                    smallest = left;
                }

                if (
                    right < this.heap.length &&
                    this.heap[right] < this.heap[smallest]
                ) {
                    smallest = right;
                }

                if (smallest === index) {
                    break;
                }

                [this.heap[index], this.heap[smallest]] =
                    [this.heap[smallest], this.heap[index]];

                index = smallest;
            }
        }

        return min;
    }
}

const minQueue = new MinHeapPriorityQueue();

minQueue.insert(5);
minQueue.insert(8);
minQueue.insert(2);
minQueue.insert(4);

console.log("Heap:", minQueue.heap);
console.log("Minimum:", minQueue.peekMin());
console.log("Extracted:", minQueue.extractMin());
console.log("New minimum:", minQueue.peekMin());
console.log("Is empty?", minQueue.isEmpty());


class OrderedArrayPriorityQueue {
    constructor() {
        this.items = [];
    }

    insert(element) {
        let index = 0;

        while (
            index < this.items.length &&
            this.items[index] <= element
        ) {
            index++;
        }

        this.items.splice(index, 0, element);
    }

    extractMin() {
        if (this.isEmpty()) {
            throw new Error("Priority queue is empty");
        }

        return this.items.shift();
    }

    peekMin() {
        if (this.isEmpty()) {
            throw new Error("Priority queue is empty");
        }

        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}
const orderedQueue = new OrderedArrayPriorityQueue();

orderedQueue.insert(5);
orderedQueue.insert(2);
orderedQueue.insert(4);
orderedQueue.insert(1);

console.log("Ordered items:", orderedQueue.items);
console.log("Minimum:", orderedQueue.peekMin());
console.log("Extracted:", orderedQueue.extractMin());
console.log("New minimum:", orderedQueue.peekMin());
console.log("Is empty?", orderedQueue.isEmpty());
