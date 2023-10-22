
import User from '../persistance/user.js';
import Account from '../persistance/account.js';
import Utils from './utils.js';
import jwt from 'jsonwebtoken';

export default {
    authenticate,
    validateJWT
}

/**
 * Logins a registered user.
 * 
 * @param {User} user - The user to be logged in.
 */
export function authenticate(request, h) {

    const user = request.payload;
    const foundUser = User.getUser(user);

    if (foundUser && Utils.comparePasswords(user.password, foundUser.password)) {
        return h.response({
            message: 'Login successful',
            accountId: Account.getAccountByEmail(user.email).id,
            accessToken: jwt.sign(user, 'CarlosAlcaraz')
        }).header('Authorization', jwt.sign(foundUser, 'CarlosAlcaraz')).code(200);
    }

    return h.response({ message: 'Invalid Email or password.' }).code(400);
}

export function validateJWT(decoded) {
    if (User.getUser(decoded)) {
        return { isValid: true };
    }
    return { isValid: false };
}
