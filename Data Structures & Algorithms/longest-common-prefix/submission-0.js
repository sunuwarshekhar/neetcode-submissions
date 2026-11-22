class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let result = ""
        for(let i=0; i< strs[0].length; i++){
            for(const s of strs){
                if (i === s.length || s[i] !== strs[0][i]) {
                    return result;
                }    
            }
            result += strs[0][i]
        }
        return result
    
    }
}
