class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  // shift in LinkedList implementation
  pop() {
    if (!this.first) return null
		let temp = this.first
		if (this.first === this.last) {
			this.last = null
		}
		this.first = this.first.next
		this.size--
		return temp.val
  }

  // unshift in LinkedList implementation
  push(val) {
    const node = new Node(val)
    if (!this.first) {
      this.first = node
      this.last = node
    } else {
      let temp = this.first
			this.first = node
			this.first.next = temp
    }
		return ++this.size
  }
}
