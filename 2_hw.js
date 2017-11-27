class Queue {
    constructor(array) {
        this.array = [];
    }
    push(obj) {
        this.array.push_back(obj);
    }
    pop() {
        for (let i = 0; i != this.array.length - 1; i++) {
            this.array[i] = this.array[i + 1];
        }
        this.array.length -= 1;
    }
    static fromArray(array) {
		const s = new Queue();
		s.data = array.slice();
		return s;
	}
}

class Dequeue extends Queue {
	pushLeft(obj) {
		this.data.unshift(obj);
	}
	popLeft() {
		return this.data.shift();
	}
}

