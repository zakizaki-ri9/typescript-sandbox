import { hasCycle, ListNode } from "./LinkedListCycle";

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
  expect(hasCycle(generateListNode([3, 2, 0, -4]))).toBe(false);
});

test("Wrong case 1", () => {
  const rootNode = generateListNode([-1, -7, 7, -4, 19, 6, -9, -5, -2]);
  let lastNode = null;
  let node = rootNode;
  while (node) {
    if (node.val === -5) {
      lastNode = node;
    }
    if (!node.next) {
      node.next = lastNode;
      break;
    }
    node = node.next;
  }

  expect(hasCycle(rootNode)).toBe(true);
});

test("Wrong case 2", () => {
  expect(
    hasCycle(
      generateListNode([
        -21,
        10,
        17,
        8,
        4,
        26,
        5,
        35,
        33,
        -7,
        -16,
        27,
        -12,
        6,
        29,
        -12,
        5,
        9,
        20,
        14,
        14,
        2,
        13,
        -24,
        21,
        23,
        -21,
        5,
      ])
    )
  ).toBe(false);
});
