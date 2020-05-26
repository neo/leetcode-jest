/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
class ListNode {
  static fromArray(array) {
    const result = new ListNode(array[0]);
    let current = result;
    array.slice(1).forEach(val => {
      current.next = new ListNode(val);
      current = current.next;
    });
    return result;
  }

  next = null;

  constructor(val) {
    this.val = val;
  }

  toArray() {
    const array = [];
    let current = this;
    while (current !== null) {
      array.push(current.val);
      current = current.next;
    }
    return array;
  }
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let result = null;
  let current = null;
  let next = null;
  let carry = false;
  while (l1 !== null || l2 !== null) {
    const addition = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    next = new ListNode(addition % 10);
    if (result === null) {
      result = next;
    } else {
      current.next = next;
    }
    carry = addition !== next.val;
    current = next;
    if (l1 !== null) {
      l1 = l1.next;
    }
    if (l2 !== null) {
      l2 = l2.next;
    }
  }
  if (carry) {
    current.next = new ListNode(1);
  }
  return result;
};

test("2. Add Two Numbers", () => {
  expect(addTwoNumbers(ListNode.fromArray([2, 4, 3]), ListNode.fromArray([5, 6, 4])).toArray()).toEqual([7, 0, 8]);
  expect(addTwoNumbers(ListNode.fromArray([5]), ListNode.fromArray([5])).toArray()).toEqual([0, 1]);
  expect(addTwoNumbers(ListNode.fromArray([1]), ListNode.fromArray([9, 9])).toArray()).toEqual([0, 0, 1]);
});
