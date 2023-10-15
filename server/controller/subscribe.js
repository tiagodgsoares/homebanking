
import User from '../persistance/user.js';
import Account from '../persistance/account.js';

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

    User.createUser(user);

    Account.createAccount(user.email);
    
}