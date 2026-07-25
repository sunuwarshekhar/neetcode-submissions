class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = new Map()
        let result = []
        for (const num of nums) {
            freq.set(num , (freq.get(num) || 0) + 1)
        }
        const data = [...freq].sort((a, b) => (b[1] - a[1]))

        for (let i =0; i< k; i++) {
            result.push(data[i][0])
        }
        return result
    }
}
