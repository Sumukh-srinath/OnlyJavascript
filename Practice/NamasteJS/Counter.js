function Counter() {
    let count = 0;
    this.increment = function () {
        console.log("Counter Incremented: ", ++count)
    };
    this.decrement = function () {
        console.log("Counter Decremented: ", --count)
    };
}


let counter = new Counter()
counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.increment()
counter.decrement()
counter.decrement()
counter.decrement()
counter.decrement()
counter.decrement()
counter.increment()