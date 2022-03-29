class Node {
  constructor(val) {
    this.val = val
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    const node = new Node(val)
    if (this.head === null) {
      this.head = node
      this.tail = node
    } else {
			this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.length++
		return this
  }

	pop() {
		if (this.head === null) return undefined
		const nodeToRemove = this.tail
		if (this.length === 1) {
			this.head = null
			this.tail = null
		} else {
			this.tail = nodeToRemove.prev
			this.tail.next = null
			nodeToRemove.prev = null
		}
		this.length--
		return nodeToRemove
	}

	shift() {
		if (this.head === null) return undefined
		const oldHead = this.head
		if (this.length === 1){
			this.head = null
			this.tail = null
		} else {
			this.head = oldHead.next
			this.head.prev = null
			oldHead.next = null
		}
		this.length--
		return oldHead
	}

	unshift(val) {
		const node = new Node(val)
		if (this.head === null){
			this.head = node
			this.tail = node
		} else {
			this.head.prev = node
			node.next = this.head
			this.head = node
		}
		this.length++
		return this
	}

	get(index) {
		if (index < 0 || index >= this.length) return null
		if (index <= this.length / 2){
			// loop forward
			let counter = 0
			let node = this.head
			while (counter !== index){
				node = node.next
				counter++
			}
			return node
		} else {
			// loop backward
			let counter = this.length - 1
			let node = this.tail
			while (counter !== index){
				node = node.prev
				counter--
			}
			return node
		}
	}

	set(index, val) {
		const node = this.get(index)
		if (node){
			node.val = val
			return true
		}
		return false
	}

	insert(index, val) {
		if (index < 0 || index > this.length) return false

		if (index === 0) {
			this.unshift(val)
			return true
		} 

		if (index === this.length) {
			this.push(val)
			return true
		}

		const node = new Node(val)
		const before = this.get(index - 1)
		const after = before.next

		before.next = node
		node.prev = before
		node.next = after
		after.prev = node

		this.length++
		return true
	}

	remove(index) {
		if (index < 0 || index >= this.length) return undefined
		if (index === 0) return this.shift()
		if (index === this.length - 1) return this.pop()

		const removedItem = this.get(index)

		removedItem.prev.next = removedItem.next
		removedItem.next.prev = removedItem.prev
		removedItem.next = null
		removedItem.prev = null
		this.length--
		return removedItem
	}
}


const list = new DoublyLinkedList()
list.push(4).push(7).push(9).push(12).push(33)

// list.pop()
// list.shift()
// list.set(0, 10)

console.log(list)