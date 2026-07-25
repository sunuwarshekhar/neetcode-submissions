class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0
        let chars = new Set()
        let maxUnq = 0;

        for(let i =0; i< s.length; i++){
            while(chars.has(s[i])){
                chars.delete(s[left])
                left++
            }
            chars.add(s[i])
            maxUnq = Math.max(maxUnq, chars.size)
        }
        return maxUnq
    }
}
