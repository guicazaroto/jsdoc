/**
 * Student Name
 * @type {string}
 */
const studentName = "John Wick"

/**
 * Students grades
 * @type {Array<Number>}
 */
const grades = [9, 7, 8, 6]

/**
 * Todo object  
 * @type {{ id: number, text: string}}
 */
const todo = {
  id: 1,
  text: 'Task one'
}

/**
 * calculate tax
 * @param {number} amount - total amount
 * @param {number} tax - tax percentage
 * @returns {string} - total with dollar sign
 */
const calculateTax = (amount, tax) => `$${amount + tax * amount }`

// criando modelos reutilizáveis

/**
 * @typedef {Object} Student
 * @property {number} id - Student id
 * @property {string} name - Student name
 * @property {string|number} [age] - Student age
 * @property {boolean} isActive - student is active
 */

 /**
  * @type {Student}
  */
 const student = {
   id: 1,
   name: 'Manuel',
   age: 7,
   isActive: false
 }

/**
 * Class to create a person object
 */
class Person {
  /**
   * 
   * @param {{name: string, age: number}} personInfo 
   */
  constructor (personInfo) {
    this.name = personInfo.name
    this.age = personInfo.age
  }

  /**
   * @property {Function} greet
   * @returns void
   */
  greet () {
    console.log(`Hello ${this.name}`)
  }
}

/**
 * See {@link Person}
 */
const person1 = new Person({ name: 'Lucas', age: 16})