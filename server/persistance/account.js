
import Accounts from '../model/account.json' assert { type: 'json' };
import utils from './utils.js';
import {v4} from 'uuid';

export default {
    getAccountById,
    getAccountByEmail,
    createAccount,
    updateAccount
}

/**
 * Get Account by ID
 *
 * @returns {Account} 
 */
function getAccountById(id) {
    return Accounts.find((account) => (account.id === id));
}

/**
 * Get Account by email
 *
 * @returns {Account} 
 */
function getAccountByEmail(email) {
    return Accounts.find((account) => (account.userEmail === email));
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
        userEmail,
        movements: []
    }

    Accounts.push(account);
    utils.saveJSONFile('account.json', JSON.stringify(Accounts)); // variable for .json

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


