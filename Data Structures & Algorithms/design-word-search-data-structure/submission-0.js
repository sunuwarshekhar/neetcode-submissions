class TrieNode {
    constructor() {
        this.children = new Map()
        this.endOfWord = false
    }
}
class WordDictionary {
    constructor() {
        this.root = new TrieNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this.root
        for(const w of word) {
            if(!curr.children.has(w)) {
                curr.children.set(w, new TrieNode())
            }
            curr = curr.children.get(w)
        }
        curr.endOfWord = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {

        const dfs = (j, node) => {

            let curr = node

            for(let i = j; i < word.length; i++) {
                const c = word[i]

                if(c === '.') {
                    for(const child of curr.children.values()){
                        if (dfs(i + 1, child)) return true
                    }
                    return false
                }
                if(!curr.children.has(c)){
                    return false
                }
                curr = curr.children.get(c)
            }
            return curr.endOfWord
        }
        return dfs(0, this.root)
    }
}
