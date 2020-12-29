/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-list/
 */

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return null;

  const valSet = new Set([head.val]);
  let currentNode = head.next;
  while (currentNode) {
    valSet.add(currentNode.val);
    currentNode = currentNode.next;
  }

  const generateListNode = (vals: number[]) => {
    const rootNode = new ListNode(vals[0]);
    let listNode = rootNode;
    vals.slice(1).forEach((val) => {
      listNode.next = new ListNode(val);
      listNode = listNode.next;
    });
    return rootNode;
  };

  return generateListNode([...valSet]);
}
