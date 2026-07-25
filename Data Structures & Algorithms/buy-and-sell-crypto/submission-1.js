class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let bestBuy = Infinity
        for(let i = 0; i< prices.length; i++){
            if(prices[i] < bestBuy){
                bestBuy = prices[i]
            }
            let currProfit = prices[i] - bestBuy
            profit = Math.max(profit, currProfit)
        }
        return profit
    }
}
