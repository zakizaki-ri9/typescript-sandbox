/**
 * https://leetcode.com/problems/linked-list-cycle/description/
 */

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function detectCycle(head: ListNode | null): ListNode | null {
  if (!head?.next) return null;

  const lookedNodes = new Set([head, head.next]);
  let node = head.next.next;
  while (node) {
    if (lookedNodes.has(node)) return node;
    lookedNodes.add(node);
    node = node.next;
  }
  return null;
}
