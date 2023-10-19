import Account from '../persistance/account.js';

export default {
    getBalance,
    addAmount: addAmount,
    removeAmount: removeAmount
}

/**
 * Get Balance
 */
function getBalance(request, h) {
    console.log(request.payload)

    const result = Account.getAccount(request.params.id);

    return h.response(result).code(200);
}

/**
 * Add Amount
 */
function addAmount(request, h) {
    
    const { payload } = request;
    const { params } = request;

    const account = Account.getAccount(params.id);
    account.balance += payload.amount;

    /** @type {Movement} */
    const movement = {
        balance: account.balance,
        amount: payload.amount,
        date: new Date(),
        //add credit property
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
    const account = Account.getAccount(params.id);

    if (account.balance + payload.amount >= 0) {

        account.balance += payload.amount;

        /** @type {Movement} */
        const movement = {
            balance: account.balance,
            amount: payload.amount,
            date: new Date(),
            //add debit property
        }

        account.movements.push(movement);
        Account.updateAccount(account);

        return h.response(account).code(200);
    }

    return h.response({ message: 'Insufficient funds.' }).code(400);
}