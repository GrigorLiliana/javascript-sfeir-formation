import 'babel-polyfill';

/**
 * @name base#variableDeclaration
 * @type {function}
 * @description Test if creation variable with new syntax has understood
 * @returns {string} fruit
 */
const variableDeclaration = () => {
  /**
   * Declare a variable fruit with new syntax variable declaration
   * This function must return fruit var
   */
let fruit = "banana";
return fruit;
};


/**
 * @name base#scopeUsed
 * @type {function}
 * @description Test if variable scope has understood
 * @returns {string} banana
 */
const scopeUsed = () => {
  /**
   * Declare a variable fruit
   * if banana === banana set banana to apple
   * This function must be return fruit
   */
let fruit = "banana";
if(fruit==="banana"){
  fruit = "apple"
  return fruit;
}

};

/**
 * @name base#templateString
 * @type {function};
 * @description Test if template string has understood
 * @returns {string} templateString
 */
const templateString = () => {
  /**
   * Declare a constant student
   * Declare a constant hello
   * This function must return this string: 'Hello Student welcome to ES6 Sfeir School'
   */
const student = "Student";
const hello = "Hello";
const sentence = `${hello} ${student} welcome to ES6 Sfeir School`;
return sentence;
};

/**
 * @name base#enhancedObjectSimple
 * @type {function}
 * @description Test if basic enhancedObject has understood
 * @returns {Object}
 */
const enhancedObjectSimple = () => {
  /**
   * Declare a constant x = 45
   * Declare a constant y = 54
   * This function must be return an object like {x:45, y:54}
   */
  const x = 45;
  const y = 54;
  const object = {x, y};
  return object;

};

/**
 * @name base#enhancedObjectParams
 * @description Test if enhancedObject with params has understood
 * @param {string} name
 * @returns {Object}
 */
const enhancedObjectParams = (name) => {
  /**
   * Declare an object which have for key hello and world_name
   * This function must return this object: {hello: 'hello' ,world_ES6: 'world ES6'}
   */
  const params = {
    hello: 'hello', [`world_${name}`]: `world ${name}`
  }
  return params;
};

/**
 * @name base#enhanenhancedObjectFunction
 * @type {function}
 * @description Test if enhancedObject with function has understood
 * @return {string}
 */
const enhancedObjectFunction = () => {
  /**
   * Declare an object which have for key hello => value of hello is a function
   * This function must be return the follow string: SFEIR
   */
const object = {
  hello(){
  return "SFEIR";
}
};

return object.hello();

};

/**
 * @name base#defaultParams
 * @type {function}
 * @description Test if defaultParams in function has understood
 * @param  {Number} x
 * @param  {Number} y
 * @param  {Number}z
 * @returns {Number}
 */
const defaultParams = (x, y = 6, z= 10 ) => {
  /**
   * This function must return the sum of params => sum must be equal to 20
   */
return x + z+ y;

};

/**
 * @name base#restParams
 * @type {function}
 * @description Test if restParams in function has understood
 * @param {Number} x
 * @param {String} y
 * @param {*} z
 * @returns {string}
 */
const restParams = (x,y, ...z) => {
  /**
   * This function must return this follow string: '2Plop3'
   */
return x+y + z.length;


};

/**
 * @name base#sprredOperatorArray
 * @type {function}
 * @description Test if spreedOperator on Array has understood
 * @param {Array} x
 * @returns {Array}
 */
const spreedOperatorArray = (x) => {
  /**
   * This function must be return the following array: [1,2,3,4]
   */
return [...x,4];

};

/**
 * @name base#spreedOperatorObject
 * @type {function}
 * @description Test if spreedOperator on object has understood
 * @param {Object }x
 * @returns {Object}
 */
const spreedOperatorObject = ({country}) => {
  const banana = {
    fruit: 'banana',
  };

  /**
   * This function must be return the following object: {fruit: 'banana', country:'Guadeloupe'}
   */

   return {...banana, country};
};


/**
 * @name base#destructArray
 * @type {function}
 * @description test if destruct Array has understood
 * @param {Array} x
 * @returns {Array} reverse x
 */
const destructArray = ([a,b]) => {
  /**
   * This function must be return the inverse array of the params
   */
return [b,a];
};

/**
 * @name base#destructObject
 * @type {function}
 * @description Test if destruct Object has understood
 * @param {Object} x
 * @returns {String}
 */
const destructObject = ({fruit}) => {
  /**
   * This function must return value of key 'fruit': banana
   */
return fruit;
};

/**
 * @name base#destructArrayFunction
 * @type {function}
 * @description Test if destruct array in function has understood
 * @param {Number} x
 * @param {Number} y
 * @returns {Number}
 */
const destructArrayFunction = ([a,]) => {
  /**
   * This function must return the first value of the array pass in params without syntax array[0]
   */
return a;
};

/**
 * @name base#destructObjectFunction
 * @type {function}
 * @description Test if destruct object in function has understood
 * @param {string} name
 * @param {string} email
 * @returns {string}
 */
const destructObjectFunction= ({name}) => {
  /**
   * This function must return the value of the first key of the object pass in params without dot notation
   */
return name;
};

export default {
  variableDeclaration,
  scopeUsed,
  templateString,
  enhancedObjectSimple,
  enhancedObjectParams,
  enhancedObjectFunction,
  defaultParams,
  restParams,
  spreedOperatorArray,
  spreedOperatorObject,
  destructArray,
  destructObject,
  destructArrayFunction,
  destructObjectFunction,
};