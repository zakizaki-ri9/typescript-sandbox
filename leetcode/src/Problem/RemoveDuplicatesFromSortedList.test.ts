import { deleteDuplicates, ListNode } from "./RemoveDuplicatesFromSortedList";

const generateListNode = (vals: number[]) => {
  if (!vals) return null;

  const rootNode = new ListNode(vals[0]);
  let listNode = rootNode;
  vals.slice(1).forEach((val) => {
    listNode.next = new ListNode(val);
    listNode = listNode.next;
  });
  return rootNode;
};

const checkListNodeVal = (a: ListNode | null, b: ListNode | null) => {
  if (!a && !b) return true;
  else if (!a || !b) return false;

  let aNode: ListNode | null = a;
  let bNode: ListNode | null = b;
  while (aNode && bNode) {
    if (aNode.val !== bNode.val) return false;
    aNode = aNode.next;
    bNode = bNode.next;
  }
  return aNode === null && bNode === null;
};

test("Run code", () => {
  const testNode = deleteDuplicates(generateListNode([1, 1, 2]));
  const toBeNode = generateListNode([1, 2]);
  expect(checkListNodeVal(testNode, toBeNode)).toBe(true);
});
