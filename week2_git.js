console.log("GIT")

var add = function(a,b){

    return a+b
}


function arith(fn, a, b){
    return fn(a,b)
}

var r = arith(add, 10, 20)
console.log(r)