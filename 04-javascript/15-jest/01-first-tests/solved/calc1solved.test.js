
const {sum, difference} = require("./calc");

test("3 + 2 should equal 5", ()=>{
    expect(sum(3,2)).toBe(5)
})

test("3 - 2 should equal 1", function(){
    expect(difference(3,2)).toEqual(1)
})

