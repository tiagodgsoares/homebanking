
import utils from './utils.js';
import Users from '../model/user.json' assert { type: 'json' };

export default {
    getUser,
    createUser,
    updateUser
}

/**
 * Get User
 * 
 * @param {{ email: string, password: string}} userToFind - The user to be registered.
 */
function getUser(userToFind) {
    return Users.find((user) => (user.email === userToFind.email));
}

/**
 * Create User
 */
function createUser(user) {
    Users.push(user);
    utils.saveJSONFile('user.json', JSON.stringify(Users));
}

/**
 * Update User
 */
function updateUser(user) {

}

function save(users) {
    utils.saveJSONFile('user.json', users);
}