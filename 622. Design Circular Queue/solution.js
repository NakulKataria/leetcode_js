class MyCircularQueue {
    constructor(k) {
        this.queue = new Array(k);
        this.capacity = k;
        this.size = 0;
        this.front = 0;
        this.rear = -1;
    }

    enQueue(value) {
        if (this.isFull()) return false; 
        
        this.rear = (this.rear + 1) % this.capacity; 
        this.queue[this.rear] = value;
        this.size++;
        return true;
    }

    deQueue() {
        if (this.isEmpty()) return false; 

        this.front = (this.front + 1) % this.capacity;
        this.size--;
        return true;
    }

    Front() {
        return this.isEmpty() ? -1 : this.queue[this.front];
    }

    Rear() {
        return this.isEmpty() ? -1 : this.queue[this.rear];
    }

    isEmpty() {
        return this.size === 0;
    }

    isFull() {
        return this.size === this.capacity;
    }
}

