export class CycledQueue<T> {
  queue: T[] = [];

  constructor(items?: T[]) {
    items && this.addMany(items);
  }

  first(): T | null {
    return this.queue[0] || null;
  }

  addOne(item: T): void {
    this.queue.push(item);
  }

  addMany(items: T[]): void {
    this.queue.push(...items);
  }

  next(): T | null {
    const item = this.queue.shift();
    if (!item) return null;

    this.queue.push(item);

    return item;
  }
}
