
import User from '../persistance/user.js';
import Utils from './utils.js';
import jwt from 'jsonwebtoken';

export default {
    authenticate,
    validateJWT
}

/**
 * Registers a new user.
 * 
 * @param {User} user - The user to be registered.
 */
export function authenticate(request, h) {

    const user = request.payload;
    const foundUser = User.getUser(user);

    if (foundUser && Utils.comparePasswords(user.password, foundUser.password)) {
        return h.response({
            message: 'Login successful'
        }).state('jwt', {jwt: jwt.sign(foundUser, 'CarlosAlcaraz')}, { encoding: 'none'}).code(200);
    }

    return null;
}

export function validateJWT(decoded) {
    if (User.getUser(decoded)) {
        return { isValid: true };
    }
    return { isValid: false };
}