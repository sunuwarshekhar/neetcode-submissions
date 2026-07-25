class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    
    for(let i = 0; i< numbers.length; i++){
        let sum = (numbers[left] + numbers[right])
        if(sum === target) {
            return [++left, ++right]
        }else if( sum > target ) {
            right--
        }else {
            left++
        }
    }
    return -1
    }
}
