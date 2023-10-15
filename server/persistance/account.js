
import Accounts from '../model/account.json' assert { type: 'json' };
import utils from './utils.js';
import {v4} from 'uuid';

export default {
    getAccount,
    createAccount,
    updateAccount
}

/**
 * Get Account
 *
 * @returns {Account} 
 */
function getAccount(id) {
    return Accounts.find((account) => (account.id === id));
}

/**
 * Create Account
 * 
 * @returns {Account} 
 */
function createAccount(userEmail) {

    const account = {
        id: v4(),
        balance: 0,
        userEmail
    }

    Accounts.push(account);
    utils.saveJSONFile('account.json', JSON.stringify(Accounts));

}

/**
 * Update Account
 */
function updateAccount(account) {
    const accountIndex = Accounts.findIndex((element) => element.id === account.id);

    if (accountIndex !== -1) {
        Accounts[accountIndex] = account;
        utils.saveJSONFile('account.json', JSON.stringify(Accounts));
    }
    
}


