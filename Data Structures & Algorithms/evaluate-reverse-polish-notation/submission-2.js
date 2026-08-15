class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let operator = ['+', '-', '*', '/']
        let stack = []
        for(let i =0; i < tokens.length; i++){
            if(isNaN(tokens[i])){
                let a = stack.pop()
                let b = stack.pop()
                switch(tokens[i]){               
                    case '+':
                        stack.push(a + b)
                        break;
                    case '-':
                        stack.push(b - a)
                        break;
                    case '*':
                        stack.push(a * b)
                        break;
                    case '/':
                        stack.push(Math.trunc(b/a))
                        break;
                    default:
                        return
                }
            }else{
                let num = Number(tokens[i])
                stack.push(num)
            }
        }
        return stack[0]
    }
}
