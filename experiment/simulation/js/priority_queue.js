class PriorityQueue {
    constructor() {
      this.queue = [];
    }
  
    put(priority, element) {
      this.queue.push({ priority, element });
      this.queue.sort((a, b) => a.priority - b.priority);
    }
  
    get() {
      return this.queue.shift();
    }

    top() {
        if (this.queue.length === 0) {
            return null;
        }
        return this.queue[0];
    }
  
    empty() {
      return this.queue.length === 0;
    }

    clear() {
        this.queue = [];
    }

    toString() {
        return this.queue.map(item => '(' + item.element + ', ' + item.priority + ')').join(', ');
    }
}