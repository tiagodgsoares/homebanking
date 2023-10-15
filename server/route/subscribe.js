/**
 * Subscribe routes.
 */

import subscribe from '../controller/subscribe.js';

export default [
    {
        method: 'POST',
        path: '/subscribe',
        handler: (request, h) => {
            console.log(request.payload)
            const result = subscribe.register(request.payload);
            return h.response(result).code(200);
        }
    }
];
