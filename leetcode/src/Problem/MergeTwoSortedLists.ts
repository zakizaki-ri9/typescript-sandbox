export function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 && l2) {
    const arr = convertArray(l1)
      .concat(convertArray(l2))
      .sort((a, b) => a - b);
    return convertListNode(arr);
  } else if (l1 && !l2) {
    return l1;
  } else if (!l1 && l2) {
    return l2;
  }
  return null;
}

const convertArray = (node: ListNode): number[] => {
  const arr: number[] = [];
  let currentNode: ListNode | null = node;
  while (currentNode) {
    arr.push(currentNode.val);
    currentNode = currentNode.next;
  }
  return arr;
};

export const convertListNode = (arr: number[]): ListNode | null => {
  if (arr.length < 1) return null;

  const firstNode: ListNode = { val: arr[0], next: null };
  let currentNode = firstNode;
  arr.slice(1).forEach((val) => {
    currentNode.next = { val: val, next: null };
    currentNode = currentNode.next;
  });
  return firstNode;
};
