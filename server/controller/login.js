
import User from '../persistance/user.js';
import Utils from './utils.js';
import { sign } from 'jsonwebtoken';

export default {
    authenticate,
}

/**
 * Registers a new user.
 * 
 * @param {User} user - The user to be registered.
 */
function authenticate(user) {
    const foundUser = User.getUser(user);

    if (foundUser && Utils.comparePasswords(user.password, foundUser.password)) {
        return {
            ...foundUser,
            accessToken: sign({ ...foundUser }, 'CarlosAlcaraz') }
    }

    return null;
}