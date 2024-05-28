/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function nextLargerNodes(head: ListNode | null): number[] {
    const values = []
    while (head?.next !== undefined || head?.next === null) {
        values.push(head.val)
        head = head.next
    }
    const res = []
    const obj = {}
    for (let i = 0; i < values.length; i++) {
        res.push(0)
        for (const key in obj) {
            const value = obj[key];
            if (values[i] > value) {
                res[Number(key)] = values[i]
                delete obj[key]
            }
        }
        obj[i] = values[i]
    }
    return res
};
