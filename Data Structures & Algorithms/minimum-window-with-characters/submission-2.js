class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
       let required = t.length
       let data = Array.from(s)
       let have = new Map()
        let target = new Map()
        let gained = 0
        let ans = ''
        let ansLen = Infinity
        let left = 0
        for(let i=0; i< t.length; i++){
            target.set(t[i], (target.get(t[i]) ||0)+ 1)
        }
       for(let i=0;i< s.length; i++){
            have.set(s[i], (have.get(s[i]) || 0) + 1)

            if(data.includes(s[i]) && have.get(s[i]) <= target.get(s[i])){
                gained++
            }

            while(gained === required){
                if(i - left + 1 < ansLen){
                    ansLen = i-left+1
                    ans = s.slice(left, i + 1)
                }
                have.set(s[left], have.get(s[left]) -1)
                if(have.get(s[left]) < target.get(s[left])){
                    gained--
                }
                left++
            }

       }
       return ans

    }
}
