/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        this.balanced = true
        this.calcRecursively(root)
        return this.balanced
    }
    calcRecursively(curr){
        if(!curr) return [true, 0]
        let left = this.calcRecursively(curr.left)
        let right = this.calcRecursively(curr.right)
        this.balanced = left[0] && right[0] && (Math.abs(left[1] - right[1]) <= 1)
        return [this.balanced, (Math.max(left[1], right[1]) + 1)]
    }

}
