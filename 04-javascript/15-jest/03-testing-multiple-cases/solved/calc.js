const sum = (a,b) => {
// logic before the return
    if(typeof a !== "number"){
        a = Number(a)
    }
    if(typeof b !== "number"){
        b = Number(b)
    }

    return a + b;
  }
const difference = (a,b) => {
    return a - b;
  }
const oddOrEven = (num) => {
    if(a % 2 === 0){
        return `${a} is an even number`
    } else {
        return `${a} is an odd number`
    }
}
  
  
    module.exports = {sum, difference, oddOrEven}