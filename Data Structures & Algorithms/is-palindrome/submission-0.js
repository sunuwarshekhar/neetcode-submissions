class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const clean = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
        let rev = ""
        for(let i = clean.length - 1; i >= 0; i--){
            rev += clean[i]
        } 
        if(rev === clean) return true
        return false
    }
}
