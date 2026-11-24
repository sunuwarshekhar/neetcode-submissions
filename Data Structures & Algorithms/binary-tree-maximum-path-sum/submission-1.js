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
    maxPathSum(root) {
        let best = -Infinity

        const recurr = (node) => {
            if(!node) return 0

            let left = Math.max(recurr(node.left), 0)
            let right = Math.max(recurr(node.right), 0)

            best = Math.max(best, left + node.val + right)
            return Math.max(left, right) + node.val
        }

        recurr(root)
        return best

    }
    
}
