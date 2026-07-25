class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()
    for (const st of strs) {
        let sorted = [...st].sort().join("")
        if(!map.has(sorted)){
            map.set(sorted, [])
        }   
        map.get(sorted).push(st)           
    }
    return [...map.values()]

    }
}
