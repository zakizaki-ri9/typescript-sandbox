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

export function hasCycle(head: ListNode | null): boolean {
  if (!head?.next) return false;

  const lookedNodes = new Set([head, head.next]);
  let node = head.next.next;
  while (node) {
    if (lookedNodes.has(node)) return true;
    lookedNodes.add(node);
    node = node.next;
  }
  return false;
}
