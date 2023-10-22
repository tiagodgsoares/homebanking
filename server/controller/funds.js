import Account from '../persistance/account.js';

export default {
    getBalance,
    addAmount,
    removeAmount
}

/**
 * Get Balance
 */
function getBalance(request, h) {

    const result = Account.getAccountById(request.params.id);

    return h.response(result).code(200);
}

/**
 * Add Amount
 */
function addAmount(request, h) {
    
    const { payload } = request;
    const { params } = request;

    const account = Account.getAccountById(params.id);
    account.balance += payload.amount;

    /** @type {Movement} */
    const movement = {
        balance: account.balance,
        amount: payload.amount,
        date: new Date(),
    }

    account.movements.push(movement);

    console.log(account)
    Account.updateAccount(account);

    return h.response(account).code(200);
}

/**
 * Remove Amount
*/
function removeAmount(request, h) {

    const { payload } = request;
    const { params } = request;
    const account = Account.getAccountById(params.id);

    if (account.balance + payload.amount >= 0) {

        account.balance += payload.amount;

        /** @type {Movement} */
        const movement = {
            balance: account.balance,
            amount: payload.amount,
            date: new Date(),
        }

        account.movements.push(movement);
        Account.updateAccount(account);

        return h.response(account).code(200);
    }
    
    return h.response({ message: 'Insufficient funds.' }).code(400);
}
