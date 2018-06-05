var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = 'cat'
  return animal
}

function add2(n) {
  const two = 2 
  return n + two
}
var theFunk = funkyFunction()
var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
<<<<<<< HEAD
var a = funkyFunction()
var theFunk = a()
console.log(theFunk)
=======

>>>>>>> d84bfe2c2afb3c0e94df9f13e83a15cc0a283eee
