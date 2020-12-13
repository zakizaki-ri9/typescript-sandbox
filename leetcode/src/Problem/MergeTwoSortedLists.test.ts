import { mergeTwoLists, convertListNode } from "./MergeTwoSortedLists";

test("Wrong case 1", () => {
  expect(
    mergeTwoLists(
      convertListNode([-10, -10, -9, -4, 1, 6, 6]),
      convertListNode([-7])
    )
  ).toStrictEqual({
    val: -10,
    next: {
      val: -10,
      next: {
        val: -9,
        next: {
          val: -7,
          next: {
            val: -4,
            next: {
              val: 1,
              next: {
                val: 6,
                next: {
                  val: 6,
                  next: null,
                },
              },
            },
          },
        },
      },
    },
  });
});
