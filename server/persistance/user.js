
import utils from './utils.js';

const Users =  JSON.parse(utils.readJSONFile('user.json'));

export default {
    getUser,
    createUser,
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
