# Exercise 1

Create an action to mark an item on the Doing list as "Done".
It must add the specified item to the Done list and remove it from the Doing list.

With the action created, use it on the DoingList component to move items to the Done column.

Lastly, create the Done list selector and use it to display the itens on the DoneList component.

## Tips
- The `markAsDone` function on the `DoingList` component is already receiving the index as a parameter;
- You can use the item index to get the todo object on the Todos List using the state on the Slice;
- Array function `Splice` can be used to remove the item from the Todos list;
- The flow to mark an item as Doing can be used as a reference.