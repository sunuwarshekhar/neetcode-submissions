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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        let result = []

        const dfs = (node) => {
            if(!node){
                result.push("N")
                return
            }
            result.push(node.val.toString())
            dfs(node.left)
            dfs(node.right)
        }
        dfs(root)
        return result.join(",")
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        let value = data.split(",")
        let i = 0

        const dfs = () => {
            if(value[i] === "N") {
                i = i + 1 
                return null 
            }
            const node = new TreeNode(Number(value[i]))
            i = i + 1
            node.left = dfs()
            node.right = dfs()
            return node
        }
        return dfs()
    }
}
