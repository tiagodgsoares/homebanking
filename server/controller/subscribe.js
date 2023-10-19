
import User from '../persistance/user.js';
import Account from '../persistance/account.js';
import Utils from './utils.js';

export default {
    register,
}

/**
 * Registers a new user.
 * 
 * @param {User} user - The user to be registered.
 */
function register(user) {
    const foundUser = User.getUser(user);
    
    if (foundUser) {
        return 'user already exists';
    }
    
    Account.createAccount(user.email);
    
    const encodedPassword = Utils.encodePassword(user.password);
    user.password = encodedPassword;
    User.createUser(user);

    return {
        ...foundUser,
        accessToken: sign({ ...foundUser }, 'CarlosAlcaraz') };
}