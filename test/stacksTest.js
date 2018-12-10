
const assert = require('chai').assert
const Stack = require('../stacks')

describe("stacks", () =>{
    it("should push items to the top of stack", ()=>{
        const stack = new Stack(4,5);
        assert.equal(stack.push(1,2,3),5)
    })
    it("should pop items from top of the stack", ()=>{
        const stack = new Stack(1,2,3)
        assert.equal(stack.pop(), 3)
    })
    it("should add items at the start of the stack", ()=>{
        const stack = new Stack(1,2,3)
        stack.reverse = true
        assert.equal(stack.push(4,5),5)
        assert.deepEqual(stack.stack, [4,5,1,2,3])
    })
    it('should pop items from the start of the stack', ()=> {
        const stack = new Stack(1,2,3)
        stack.reverse= true
        assert.equal(stack.pop(),1)
        assert.deepEqual(stack.stack, [2,3])
    })
})

