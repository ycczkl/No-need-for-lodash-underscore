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

/**
 * 2.3 filter
 * Creates a new array which pass test which implemented by provided function
 */
filterExample = () => {
  let array = [1, 2, 3, 4]
  let smallEnough = (i) => i < 3
  console.log(_.filter(array, smallEnough))
  console.log(array.filter(smallEnough))
}
// filterExample()

/**
 * 2.4 includes (not support by IE)
 * check if value is in collection
 */
includesExample = () => {
  let array = [1, 3, 4]
  console.log(_.includes(array, 2)) // false
  console.log(array.includes(2)) // false
}
// includesExample()

/**
 * 2.5 map
 * Translate all items in array or object to new array of items
 */
mapExample = () => {
  let twice = (v, i) => v * 2
  let array = [1, 2, 3]
  console.log(_.map(array, twice)) // [ 2, 4, 6 ]
  console.log(array.map(twice)) // [ 2, 4, 6 ]

  let objArr = [{name: "Alice"}, {name: "Bob"}, {name: "Jeremy"}]
  console.log(_.map(objArr, 'name'))
  console.log(objArr.map((o) => o.name))
}
// mapExample()

/**
 * 2.6 reduce
 * The reduce() method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.
 */
reduceExample = () => {
  let nestArr = [[0, 1], [2, 3], [4, 5]]
  console.log(_.reduce(nestArr, (p, c) => p.concat(c), [])) //[ 0, 1, 2, 3, 4, 5 ]
  console.log(nestArr.reduce((p, c) => p.concat(c), [])) // [ 0, 1, 2, 3, 4, 5 ]
}
// reduceExample()

/**
 * 2.7 reduceRight
 * almost same like reduce, it iterates from right to left
 */

/**
 * 2.8 size
 * Returns the number of values in the collection
 */
sizeExample = () => {
  console.log(_.size({one: 1, two: 2}))
  console.log(Object.keys({one: 1, two: 2}).length)
}
// sizeExample()

/**
 * 2.9 some
 * Test wheather some element in the array passes the test implemented by the provided function
 */
someExample = () => {
  let bigEnough = (i) => i > 10
  console.log(_.some([1, 2, 11], bigEnough)) //true
  console.log([1, 2, 11].some(bigEnough)) //true
}
// someExample()

// Function

/**
 * 3.1 after
 * Create a function which will only be run after be called count times
 */
afterExample = () => {
  let arr = [1 ,2, 3]
  let successFn = () => console.log("i'm done")
  let done = _.after(arr.length, successFn)
  arr.forEach((i) => {
    console.log(i)
    done()
  })
}
// afterExample()
// 1
// 2
// 3
// i'm done

// Lang

/**
 * 4.1 isNaN
 * Check if value is NaN
 */
NaNExample = () => {
  console.log(_.isNaN(NaN)) //true
  console.log(Number.isNaN(NaN)) //true
  // Don't use global isNaN function since it suffer the problem of forcefully converting the parameter to number
}
// NaNExample()

// Object

/**
 * 5.1 assign
 * The method is used to copy the values of all enumerable own properties from one or more source objects to a target object
 */
assignExample = () => {
  class Foo {
    constructor() {
      this.c = 3  
    }  
  }
  
  class Bar {
    constructor() {
      this.b = 4
    }
  }
  Foo.prototype.d = 9
  Bar.prototype.e = 10
  let lo_res = _.assign(new Foo(), new Bar())
  let res = Object.assign(new Foo(), new Bar())
  console.log(lo_res.c) // 3
  console.log(res) // Foo { c: 3, b: 4 }
}
// assignExample()

/**
 * 5.2 keys
 * Retrive all names of object's own enumerable properties
 */
keysExample = () => {
  console.log(_.keys({one: 1, two: 2, three: 3})) // [ 'one', 'two', 'three' ]
  console.log(Object.keys({one: 1, two: 2, three: 3})) // [ 'one', 'two', 'three' ]
}
// keysExample()

// String

/**
 * 6.1 repeat
 * repeat given string n times
 */
repeatExample = () => {
  console.log(_.repeat('abc', 2))
  console.log('abc'.repeat(2))
}
// repeatExample()

/**
 * 6.2 toLower/ toUpper
 * Lowercase/ Uppercase a given string
 */
toLowerAndToUpperExample = () => {
  console.log(_.toLower('GOOD Luck')) //good luck
  console.log('GOOD Luck'.toLowerCase()) //good luck
  console.log(_.toUpper('GOOD Luck')) // GOOD LUCK
  console.log('GOOD Luck'.toUpperCase()) // GOOD LUCK
}
// toLowerAndToUpperExample()

/**
 * 6.3 trim
 * Remove leading and trailing whitespace character from string
 */
trimExample = () => {
  let str = '   aloha    '
  console.log(_.trim(str)) //aloha
  console.log(str.trim()) //aloha
}
trimExample()
