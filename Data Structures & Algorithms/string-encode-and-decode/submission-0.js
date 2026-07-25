class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let st = ""
        for(const str of strs) {
            st += str.length + '#' + str
        }
        return st
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i = 0;
        let result = []
        let len = 0
        while(i < str.length) {
            let j = i;
            while(str[j] !== "#"){
                j++
            }
            len = Number(str.substring(i , j))
            result.push(str.substring(j + 1, j + 1 + len))
            i = j + 1 + len
        }
        return result
    }
}
