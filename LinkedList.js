class Node {
   constructor(val) {
      this.val = val
      this.next = null
   }
}

class LinkedList {
   constructor() {
      this.head = null
      this.tail = null
      this.length = 0
   }

   push(val) {
      const node = new Node(val)
      if (!this.head) {
         this.head = node
         this.tail = node
      } else {
         this.tail.next = node
         this.tail = node
      }
      this.length++
      return this
   }

   pop() {
      if (!this.head) return undefined

      let current = this.head
      let prev = current

      while (current.next) {
         prev = current
         current = current.next
      }

      this.tail = prev
      this.tail.next = null
      this.length--
      if (this.length === 0) {
         this.head = null
         this.tail = null
      }
      return current
   }

   shift() {
      if (!this.head) return undefined
      const current = this.head
      this.head = current.next
      this.length--
      if (this.length === 0) {
         this.tail = null
      }
      return current
   }

   unShift(val) {
		const node = new Node(val)
      if (!this.head) {
         this.head = node
         this.tail = node
			return this
      }
      node.next = this.head
		this.head = node
		this.length++
		return this
   }

	get(index){
		if (index < 0 || index >= this.length) return null
		let count = 0
		let current = this.head
		while (index > count){
			current = current.next
			count++
		}
		return current
	}

	set(index, val){
		const current = this.get(index)
		if (!current) return false
		current.val = val
		return true
	}

	insert(index, val){
		if (index < 0 || index > this.length) return false
		if (index === this.length) {
			this.push(val)
			return true
		}
		if (index === 0) {
			this.unShift(val)
			return true
		}
		const node = new Node(val)
		const prev = this.get(index - 1)
		node.next = prev.next 
		prev.next = node
		this.length++
		return true
	}

	remove(index){
		if (index < 0 || index >= this.length) return undefined
		if (index === this.length - 1) return this.pop()
		if (index === 0) return this.shift()
		
		const prev = this.get(index - 1)
		const temp = prev.next
		prev.next = temp.next 
		this.length--
		return temp
	}

	reverse(){
		// swap the head and the tail
		let node = this.head
		this.head = this.tail
		this.tail = node

		let prev = null
		let next

		for (let i = 0; i < this.length; i++){
			next = node.next
			node.next = prev
			prev = node
			node = next
		}
		return this
	}
}

const list = new LinkedList()

list.push(45).push(32).push(30).push(59).push(18)
list.unShift(69)

// list.set(2, 45)
list.insert(1, 33)

console.log("GET", list.remove(7))
console.log(list)
