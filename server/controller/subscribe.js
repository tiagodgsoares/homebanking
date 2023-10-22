
import User from '../persistance/user.js';
import Account from '../persistance/account.js';
import Utils from './utils.js';
import jwt from 'jsonwebtoken';

export default {
    register,
}

/**
 * Registers a new user.
 * 
 * @param {User} user - The user to be registered.
 */
function register(request, h) {

    try {

        const user = request.payload;
        const foundUser = User.getUser(user);

        if (foundUser) {
            return h.response({ message: 'User already exists' }).code(400);
        }

        Account.createAccount(user.email);

        const encodedPassword = Utils.encodePassword(user.password);
        user.password = encodedPassword;
        User.createUser(user);

        return h.response({
            message: `User with email ${user.email} created successfully!`,
            accountId: Account.getAccountByEmail(user.email).id,
            accessToken: jwt.sign(user, 'CarlosAlcaraz')
        }).header('Authorization', jwt.sign(user, 'CarlosAlcaraz')).code(200);

    } catch (error) {
        console.log(error)
        return h.response({ message: 'There was a problem with your request' }).code(400);
    }
}
