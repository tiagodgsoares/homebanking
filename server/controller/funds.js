import Account from '../persistance/account.js';

export default {
    getBalance,
    addAmmount,
    removeAmmount
}

/**
 * Get Balance
 */
function getBalance(id) {
    return Account.getAccount(id).balance;
}

/**
 * Add Ammount
 */
function addAmmount(value, id) {

    const account = Account.getAccount(id);
    account.balance += value;

    Account.updateAccount(account);
    console.log(account);
}

/**
 * Remove Ammount
 */
function removeAmmount(value, id) {

    const account = Account.getAccount(id);
    //TODO verify balance
    account.balance -= value;

    Account.updateAccount(account);
}
