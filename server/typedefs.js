/**
 * The representation of an user Account.
 *
 * @typedef {Object} Account
 *
 * @property {uuid}         id          - Indicates whether the Courage component is present.
 * @property {string}       userEmail   - The user which this account belongs too.
 * @property {number}       balance     - The account current balance.
 * @property {Movement[]}   movements   - The account movements list.
 */

/**
 * The representation of an user Movement.
 *
 * @typedef {Object} Movement
 *
 * @property {number}   balance     - The current balance.
 * @property {number}   amount     - The movement amount
 * @property {Date}     date        - The movement date.
 */

 /**
 * The representation of a system User.
 *
 * @typedef {Object} User
 *
 * @property {string}   email       - The user which this account belongs too.
 * @property {string}   password    - The user password.
 */