class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map = [];
        for(const num of nums) {
            if(map.includes(num)){
                return true
            }
            map.push(num)
        }
        return false
    }
}
