console.log("GIT")

var add = function(a,b){

    return a+b
}


function arith(fn, a, b){
    return fn(a,b)
}

var r = arith(add, 10, 20)
console.log(r)


var a = [1,2,3,4]
console.log(typeof(a))
console.log(a[0])
console.log(a[10])