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
    maxDepth(root) {
        if (!root) return 0
        let queue = [root]
        let depth = 0
        console.log(queue.length)
        while(queue.length){
            const next = []
            for(const node of queue){
                if (node.left) {
                    next.push(node.left)
                }   
                if (node.right) {
                    next.push(node.right)
                }
            }
            queue = next
            depth++
        }
        return depth
    }
}
