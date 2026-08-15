class MinStack {
    constructor() {
        this.stack = []
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if(this.stack.length > 0){
            if(val < this.minStack[this.minStack.length - 1]){
                this.minStack.push(val)
            }else {
                this.minStack.push(this.minStack[this.minStack.length - 1])
            }
            this.stack.push(val)
        }else{
            this.stack.push(val)
            this.minStack.push(val)
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
        this.minStack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1]
    }
}
