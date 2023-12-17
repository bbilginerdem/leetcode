function memoize(fn) {
  let cache = {}

  return function (...args) {
    const key = JSON.stringify(args)

    if (key in cache) {
      return cache[key]
    }
    cache[key] = fn(...args)
    console.log(key)
    console.log(cache)
    return cache[key]
  }
}


let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
})
memoizedFn(2, 3) // 5
memoizedFn(2, 3) // 5
memoizedFn(3, 4)
memoizedFn(1, 4)
console.log(callCount) // 1


// [2, 3]
// { '[2,3]': 5 }
// [3, 4]
// { '[2,3]': 5, '[3,4]': 7 }
// [1, 4]
// { '[2,3]': 5, '[3,4]': 7, '[1,4]': 5 }
// 3