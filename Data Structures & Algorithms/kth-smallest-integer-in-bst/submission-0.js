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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        this.counter = 0
        this.result = null
        this.recurFn(root, k)
        return this.result
    }
    recurFn(node, k){
        if(!node || this.counter >=k) return

        this.recurFn(node.left, k)

        if(this.counter >= k ) return
        
        this.counter++
        if(this.counter === k) {
            return this.result = node.val
        }

        this.recurFn(node.right, k)
    }
}
