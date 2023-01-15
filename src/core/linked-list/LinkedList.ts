import { LinkedListNode } from './LinkedListNode'

export class LinkedList<T extends object> {
  public head: LinkedListNode<T> | null = null
  public tail: LinkedListNode<T> | null = null
  private readonly loopList: boolean = false

  constructor(loopList: boolean = false) {
    this.loopList = loopList
  }

  append(value: T) {
    // Создаём новый узел.
    const newNode = new LinkedListNode(value)

    // Если нет head или tail, делаем новым узлом head и tail.
    if (!this.head || !this.tail) {
      this.head = newNode
      this.tail = newNode

      return this
    }

    // Присоединяем новый узел к концу связного списка.
    // Берём последний узел и указываем, что его next будет новым узлом.
    this.tail.next = newNode

    // Переназначаем tail на новый узел.
    this.tail = newNode

    if (this.loopList) {
      // Зацикливаем список
      this.tail.next = this.head
    }

    return this
  }

  fromArray(values: T[]) {
    values.forEach((value) => this.append(value))

    return this
  }
}
