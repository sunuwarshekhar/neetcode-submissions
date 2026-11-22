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
    isValidBST(root) {
        let res = this.recurFn(root, -Infinity, Infinity)
        return res        
    }
    recurFn(curr, left, right) {
        if(!curr) return true
        if(curr.val <= left || curr.val >= right){
            return false
        }
        let leftRes = this.recurFn(curr.left, left, curr.val)
        let rightRes = this.recurFn(curr.right, curr.val, right)
        // return (this.recurFn(curr.left, left, curr.val) && this.recurFn(curr.right, curr.val, right))
        return leftRes && rightRes
    }
}
