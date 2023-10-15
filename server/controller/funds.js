import Account from '../persistance/account.js';

export default {
    getBalance,
    addAmmount,
    removeAmmount
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
 * Add Ammount
 */
function addAmmount(request, h) {

    const { payload } = request;
    const { params } = request;

    console.log(params)
    const account = Account.getAccount(params.id);
    account.balance += payload.ammount;
    console.log(payload.ammount)

    /** @type {Movement} */
    const movement = {
        balance: account.balance,
        ammount: payload.ammount,
        date: new Date(),
    }

    account.movements.push(movement);

    console.log(account)
    Account.updateAccount(account);

    return h.response(account).code(200);
}

/**
 * Remove Ammount
*/
function removeAmmount(request, h) {

    const { payload } = request;
    const { params } = request;

    const account = Account.getAccount(params.id);

    if (account.balance >= payload.ammount) {

        account.balance -= payload.ammount;

        /** @type {Movement} */
        const movement = {
            balance: account.balance,
            ammount: payload.ammount,
            date: new Date(),
        }

        account.movements.push(movement);

        Account.updateAccount(account);
        console.log(account);

        return h.response(account).code(200);
    }

    return h.response({ message: 'Insufficient funds.' }).code(400);
}