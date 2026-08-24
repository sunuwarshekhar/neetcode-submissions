class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let map = new Map()
        for (let i =0; i< position.length; i++){
            map.set(position[i], speed[i])
        }
        let sorted = [...map.entries()].sort((a,b )=> b[0] - a[0])
        let carSpeeds = []
        let fleet = 1
        let j = 0
        for(let i =0; i< sorted.length; i++){
            let time = Math.abs((target - sorted[i][0])/ sorted[i][1])
            if(carSpeeds.length === 0){
                j = time
            }
            carSpeeds.push(time)
            if(j < time){
                fleet = fleet + 1
                j = time
            }
        }
        return fleet
    }
}
