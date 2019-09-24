/**
 * @name iterator#iteratorArray
 * @type {function}
 * @description Test if array iterator has understood
 * @param {number} iteration
 */
export function iteratorArray(iteration) {
  /**
   * Create an array Iterator which length is 5
   * Return this array Iterator
   *
   */
  let iterator = new Set;
  iterator.add("1").add("dois").add("3").add("4").add("5");
  return iterator;
}

/**
 * @name iterator#iteratorObject
 * @type {function}
 * @description Test if object Iterator has understood
 * @param {string} name
 * @param {string }lastName
 */
export function iteratorObject(name, lastName) {
  /**
   * Create an object iterator with key = name and value = lastName
   * Return this object Iterator
   */
  const object = new Map;
  object.set(name, lastName)
  return object;

}

/**
 * @name iterator#fibonacciGnerator
 * @type {function}
 * @description Test if generator function has understood;
 * @param x
 * @return {Number} finalResult = 13
 */
export function fibonacciGenerator (x) {
  let finalResult;
  let fib = [];
  fib[0] = 0;
  fib[1] = 1;
  /**
   * Write a generator function name fibonacci which take an index in params
   * Write a loop for automatically generate fibonacci numbers
   * Return the result when it is 13
   * Index: index = 7;
   */

  fibonacciFunction=function*(i){
    yield fib[i]=fib[i-1] + fib[i-2];

  }

  for(let j=x; j<=7; j++){
    finalResult =fibonacciFunction(j).next().value;
  }
  return finalResult;
}