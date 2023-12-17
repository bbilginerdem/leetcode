/**
 * @param {number} val
 * @return {Object}
 */
var expect = function (val: number) {
  return {
    toBe: function (toBeVal: number) {
      if (val !== toBeVal) {
        throw new Error("Not Equal")
      }

      return true
    },
    notToBe: function (notToBeVal: number) {
      if (val === notToBeVal) {
        throw new Error("Equal")
      }

      return true
    }
  }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

let x = {...expect}
console.log(expect.caller)
console.log(expect.arguments)
console.log(expect.apply)
console.log(expect.length)
console.log(expect(5).toBe(5))