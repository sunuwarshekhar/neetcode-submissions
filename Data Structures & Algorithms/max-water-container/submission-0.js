class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let left = 0;
        let right = heights.length - 1
        let area = 0;
        
        while(left < right){
            let currHeight = Math.min(heights[left], heights[right])
            let breadth = right - left
            area = Math.max(area, (currHeight * breadth))
            if(heights[left] < heights[right]){
                left++
            }else {
                right--
            }
        }
        return area
    }
}
