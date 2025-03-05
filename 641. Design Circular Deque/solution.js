class MyCircularDeque {
    constructor(k) {
        this.capacity = k + 1; 
        this.deque = new Array(this.capacity);
        this.front = 0;
        this.rear = 0;
    }

    insertFront(value) {
        if (this.isFull()) return false;
        
        this.front = (this.front - 1 + this.capacity) % this.capacity; 
        this.deque[this.front] = value;
        return true;
    }

    insertLast(value) {
        if (this.isFull()) return false;

        this.deque[this.rear] = value;
        this.rear = (this.rear + 1) % this.capacity; 
        return true;
    }

    deleteFront() {
        if (this.isEmpty()) return false;

        this.front = (this.front + 1) % this.capacity; 
        return true;
    }

    deleteLast() {
        if (this.isEmpty()) return false;

        this.rear = (this.rear - 1 + this.capacity) % this.capacity; 
        return true;
    }

    getFront() {
        return this.isEmpty() ? -1 : this.deque[this.front];
    }

    getRear() {
        return this.isEmpty() ? -1 : this.deque[(this.rear - 1 + this.capacity) % this.capacity];
    }

    isEmpty() {
        return this.front === this.rear;
    }

    isFull() {
        return (this.rear + 1) % this.capacity === this.front;
    }
}
