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
 * 1.5 indexOf
 * return the first index of the given value. If not found return -1
 */
indexOfExample = () => {
  let array = [1, 2, 3]
  let lo_res = _.indexOf(array, 1) // 0
  console.log(lo_res)
  let res = array.indexOf(4) // -1
  console.log(res)
}
// indexOfExample()
