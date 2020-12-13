/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/772/
 * の回答
 */

// main
function isPalindrome(head: ListNode | null): boolean {
  const vals = getVals(head);
  if (!vals) return false;

  for (let i = 0; i < vals.length / 2; i++) {
    if (vals[i] !== vals[vals.length - i - 1]) return false;
  }

  return true;
}

function getVals(head: ListNode | null): number[] {
  if (!head) return [];

  const vals: number[] = [head.val];
  let nextNode = head.next;
  while (nextNode) {
    vals.push(nextNode.val);
    nextNode = nextNode.next;
  }
  return vals;
}
