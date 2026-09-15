class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let cols = matrix[0].length
        let left = 0
        let right = matrix[0].length * matrix.length - 1
        while (left <= right){
            let mid = Math.ceil((left + right) / 2)

            const row = Math.floor(mid / cols)
            const col = mid % cols

            const value = matrix[row][col]

            if(value === target){
                return true
            }

            if(value < target){
                left = mid + 1
            }else {
                right = mid - 1
            }
        }
        return false
    }
}
