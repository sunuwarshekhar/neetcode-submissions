class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let left =0
        let s1hash = new Map(Array.from({length:26}, (_,i) => 
        [String.fromCharCode(97 + i), 0]))

        let s2hash = new Map(Array.from({length:26}, (_, i) =>
        [String.fromCharCode(97 + i), 0]))        

        for(let i =0; i< s1.length; i++){
            s1hash.set(s1[i], (s1hash.get(s1[i]) || 0) + 1)
        }

        for(let i =0; i< s2.length; i++){
            s2hash.set(s2[i], (s2hash.get(s2[i]) || 0) + 1)

            while(i - left + 1 > s1.length){
                s2hash.set(s2[left], s2hash.get(s2[left]) - 1)
                left++
            }
            if([...s1hash.values()].join('') === [...s2hash.values()].join('')){
                return true
            }
        }
        return false
    }

}