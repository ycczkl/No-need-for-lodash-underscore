const _ = require('lodash')

// 1. Array

/**
 * 1.1 concat
 * Creates a new array cocatenating array with any additional arrays/values
 */
concatExample = () => {
  let array = [1]
  let lo_res = _.concat(array, [2])
  let native_res = array.concat([2])

  console.log(lo_res, native_res) // [ 1, 2 ] [ 1, 2 ]
}
// concatExample()

/**
 * 1.2 fill
 * Fills elements of array with value from start up to, but not including, end.
 */
fillExample = () => {
  let array = [1, 2, 3]

  _.fill(array, 'a')
  console.log(array) //[ 'a', 'a', 'a' ]

  array = [1, 2, 3]
  array.fill('a') //[ 'a', 'a', 'a' ]
  console.log(array)

  // Create a array of size 8 and fill with 0
  let res = Array(8).fill(0)
  console.log(res) //[ 0, 0, 0, 0, 0, 0, 0, 0 ]
  res = res.fill('2', 1, 2)
  console.log(res) //[ 0, '2', 0, 0, 0, 0, 0, 0 ]
}
// fillExample()

/**
 * 1.3 find
 * Returns a value in the array, if an element in array satisfies the provided testing function.
 * Otherwise undefined is returned
 */
findExample = () => {
  let users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ]
  let lo_res = _.find(users, (o) => o.age < 36)
  console.log(lo_res) // { user: 'pebbles', age: 1, active: true }
  let res = users.find((o) => o.age < 40)
  console.log(res) // { user: 'barney', age: 36, active: true }. Only one vlue will be returned
}
// findExample()

/**
 * 1.4 findIndex
 * Return the index of array if if an element in the array satisfies the provided testing function.
 * Otherwise -1 is returned.
 */
findIndexExample = () => {
  let users = [
    { 'user': 'barney',  'age': 36, 'active': true },
    { 'user': 'fred',    'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1,  'active': true }
  ]
  let lo_res = _.findIndex(users, (o) => o.age < 40)
  console.log(lo_res) // 0

  let res = users.findIndex((o) => o.age < 40)
  console.log(res) // 0
}
// findIndexExample()

/**
 * 1.5 indexOf/ lastIndexOf
 * return the first index of the given value. If not found return -1
 */
indexOfExample = () => {
  let array = [1, 2, 3, {'k': 'v'}]
  let lo_res = _.indexOf(array, 1) // 0
  console.log(lo_res)
  console.log(_.lastIndexOf(array, 3)) // 2
  let res = array.indexOf({'k': 'v'}) // -1, can't search object
  console.log(res)
  console.log(array.lastIndexOf(3)) // 2
}
// indexOfExample()

/**
 * 1.6 join
 * Join a list of elemts in an array with a given separator
 */
joinExample = () => {
  let lo_res = _.join([1, 2, 3], '-')
  console.log(lo_res) //  1-2-3
  let res = [1, 2, 3].join('-')
  console.log(res) // 1-2-3
}
// joinExample()

/**
 * 1.7 reverse
 * reverse array
 */
reverseExample = () => {
  let array = [1, 2, undefined, null]
  console.log(_.reverse(array)) //[ null, undefined, 2, 1 ]
  console.log(array.reverse()) // [ 1, 2, undefined, null ]
}
// reverseExample()


// 2. Collection: Lodash support collection function but native JS onlu works on Array
/**
 * 2.1 each
 */
eachExample = () => {
  let array = [1, 2, 3]
  _.each(array, (v, i) => console.log(`index: ${i}, value: ${v}`))
  array.forEach((v, i) => console.log(`index: ${i}, value: ${v}`))
}
// eachExample()

/**
 * 2.2 every
 * Test weather all elements in array pass the test implemented by the provided function
 */
everyExample = () => {
  let isBigEnough = (i) => i > 30
  let array = [1, 2, 3, 40]
  let bigArray = [40, 50, 60]
  console.log(_.every(array, isBigEnough)) // false
  console.log(bigArray.every(isBigEnough)) // true
}
// everyExample()
