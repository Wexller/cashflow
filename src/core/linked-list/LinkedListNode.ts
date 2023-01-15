export class LinkedListNode<T extends object> {
  constructor(public value: T, public next: LinkedListNode<T> | null = null) {}
}
