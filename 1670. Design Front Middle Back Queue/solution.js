class FrontMiddleBackQueue {
    constructor() {
        this.front = [];
        this.back = [];
    }

    _balance() {
        if (this.front.length > this.back.length + 1) {
            this.back.unshift(this.front.pop());
        } else if (this.front.length < this.back.length) {
            this.front.push(this.back.shift());
        }
    }

    pushFront(val) {
        this.front.unshift(val);
        this._balance();
    }

    pushMiddle(val) {
        if (this.front.length > this.back.length) {
            this.back.unshift(this.front.pop());
        }
        this.front.push(val);
    }

    pushBack(val) {
        this.back.push(val);
        this._balance();
    }

    popFront() {
        if (this.front.length === 0 && this.back.length === 0) return -1;
        const val = this.front.length ? this.front.shift() : this.back.shift();
        this._balance();
        return val;
    }

    popMiddle() {
        if (this.front.length === 0 && this.back.length === 0) return -1;
        const val = this.front.length === this.back.length ? this.front.pop() : this.front.pop();
        this._balance();
        return val;
    }

    popBack() {
        if (this.front.length === 0 && this.back.length === 0) return -1;
        const val = this.back.length ? this.back.pop() : this.front.pop();
        this._balance();
        return val;
    }
}