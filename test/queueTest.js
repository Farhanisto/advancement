const assert = require('chai').assert
const Queue = require('../queue')

describe('queue', () =>{
    it("should add items to the back",() => {
       const queue = new Queue(4,5)
       assert.equal(queue.enqueue(1,2,3), 5)
       assert.deepEqual(queue.queue, [1,2,3,4,5])
    })
    it("should add items to the front", ()=>{
        const queue = new Queue(4,5)
        queue.reverse = true
        assert.equal(queue.enqueue(1,2,3),5)
        assert.deepEqual(queue.queue, [4,5,1,2,3])
    })
    it("should remove items from the from the back of the queue",()=>{
        const queue = new Queue(4,5)
        assert.equal(queue.dequeue(), 5)
    })
    it("should remove items from the from the front of the queue",()=>{
        const queue = new Queue(4,5)
        queue.reverse = true
        assert.equal(queue.dequeue(), 4)
    })
})