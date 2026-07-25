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
    }
    for(const s of strs){
        let sorted = [...s].sort().join("") 
        if(map.has(sorted)){
            map.get(sorted).push(s)
        }
    }
    return [...map.values()]

    }
}
