/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(lists.length === 0){
            return null
        } 
        let interval = 1
        while(interval < lists.length) {
            for(let i = 0; i + interval < lists.length; i += interval * 2){
                let dummy = new ListNode(0)
                let tail = dummy
                let l1 = lists[i]
                let l2 = lists[i + interval];
                while(l1 !== null && l2 !== null){
                    if(l1.val <= l2.val) {
                        tail.next = l1
                        l1 = l1.next
                    }else {
                        tail.next = l2
                        l2 = l2.next
                    }
                    tail = tail.next
                }
                tail.next = l1 !== null ? l1 : l2

                lists[i] = dummy.next
            }
            interval *= 2
        }
        return lists[0]
    }
}
