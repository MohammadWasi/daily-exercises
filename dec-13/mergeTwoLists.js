function ListNode(val) {
  this.val = val;
  this.next = null;
}

const mergeTwoLists = (l1, l2) => {
  let list1 = l1;
  let list2 = l2;
  const mergedList = new ListNode(-1);
  let currentList = mergedList;

  while (list1 && list2) {
    if (list1.val >= list2.val) {
      currentList.next = list2;
      list2 = list2.next;
    } else {
      currentList.next = list1;
      list1 = list1.next;
    }
    currentList = currentList.next;
  }

  if (list1) {
    currentList.next = list1;
  } else {
    currentList.next = list2;
  }

  return mergedList.next;
};
export { mergeTwoLists, ListNode };
