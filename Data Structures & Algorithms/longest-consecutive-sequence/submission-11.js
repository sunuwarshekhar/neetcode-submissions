class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let sorted = nums.sort((a,b) => a -b)
        let max = 1;
        let consq = 1;
        if(nums.length === 0 ) return 0
        for(let i= 1; i< sorted.length; i++){
            if((sorted[i] === sorted[i-1])) {
                continue
            }
            if(sorted[i] === (sorted[i-1] + 1)) {
                consq++
            }else{
                consq = 1
            }
            max = Math.max(consq, max)
        }
        return max
    }
}
