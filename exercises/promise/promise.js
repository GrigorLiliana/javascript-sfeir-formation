/**
 * @name promise#promiseResolve
 * @type {function}
 * @description Test if resolve promise has understood
 * @returns {Promise<any>}
 */
const promiseResolve = () => {
  /**
   * This function must be return a resolved Promise with the following string value: 'I love ES6' after 500ms
   */
  return new Promise((resolve, reject) =>{
    setTimeout(()=>(resolve('I love ES6')),500);
    });


};

/**
 * @name promise#promiseReject
 * @type {function}
 * @description Test if reject promise has understood
 * @returns {Promise<any>}
 */
const promiseReject = () => {
  /**
   * This function must be return a rejected Promise with the following string value: 'I hate rejection' after 500ms
   */
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
    reject('I hate rejection');
    },500);
    });
};

/**
 * @name promise#promiseChained
 * @type {function}
 * @description Test if chane promise has understood
 * @returns {Promise<any>}
 */
const promiseChained = () => {
  /**
   * This function must return a resolved promise with the following string: 'I love ES6 and SFEIR'
   * For that you must add the string 'and SFEIR' after 'promiseResolve' (first exercise) has resolved
   * You must chain the promise for doing this exercise
   */
  return promiseResolve().then(value =>`${value} and SFEIR`);
};

export default {
  promiseResolve,
  promiseReject,
  promiseChained,
}