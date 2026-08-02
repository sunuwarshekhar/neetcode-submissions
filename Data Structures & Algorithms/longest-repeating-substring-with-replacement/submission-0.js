class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let left = 0;
        let maxLength = 0
        let maxCount = 0
        let map = new Map()
        for(let i =0; i< s.length; i++){
            map.set(s[i], (map.get(s[i]) || 0) + 1)
            maxCount = Math.max(maxCount , map.get(s[i]))

            let window = i - left + 1
            if(window - maxCount > k) {
                map.set(s[left], (map.get(s[left]) - 1))
                left++
                window = i - left + 1 //need to update with latest decr val of left
            }

            maxLength = Math.max(window, maxLength)
        }
        return maxLength
    }
}
