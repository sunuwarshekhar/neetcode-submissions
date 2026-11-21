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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        this.result = 0
        this.measureHeight(root)
        return this.result
    }
    measureHeight(curr){
        if(!curr) return 0
        let left = this.measureHeight(curr.left)
        let right = this.measureHeight(curr.right)
        this.result = Math.max(this.result, left + right)
        return 1 + Math.max(left, right)
    }
}
