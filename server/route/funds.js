/**
 * Funds routes.
 */

import funds from "../controller/funds.js";
const path = '/funds';

export default [
    {
        method: 'GET',
        path: `${path}/{id}`,
        handler: funds.getBalance,
    },
    {
        method: 'PUT',
        path: `${path}/{id}`,
        handler: funds.addAmmount,
    },
    {
        method: 'DELETE',
        path: `${path}/{id}`,
        handler: funds.removeAmmount
    }
];