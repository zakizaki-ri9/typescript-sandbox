import { detectCycle, ListNode } from "./LinkedListCycle2";

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

test("Run code", () => {
  expect(detectCycle(generateListNode([3, 2, 0, -4]))).toBe(null);
});
