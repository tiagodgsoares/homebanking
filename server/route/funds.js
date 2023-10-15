/**
 * Funds routes.
 */

import funds from "../controller/funds.js";
const path = '/funds';

export default [
    {
        method: 'GET',
        path: `${path}/{id}`,
        handler: (request, h) => {
            console.log(request.payload)
            const result = funds.getBalance(request.params.id);
            return h.response(result).code(200);
        }
    },
    {
        method: 'PUT',
        path: `${path}/{id}`,
        handler: (request, h) => {
            console.log(request.payload)
            const result = funds.addAmmount(request.payload.ammount, request.params.id);
            return h.response(result).code(200);
        }
    },
    {
        method: 'DELETE',
        path: `${path}/{id}`,
        handler: (request, h) => {
            console.log(request.payload)
            const result = funds.removeAmmount(request.payload.ammount, request.params.id);
            return h.response(result).code(200);
        }
    }
];
