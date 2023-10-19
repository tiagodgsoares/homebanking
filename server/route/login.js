/**
 * Login routes.
 */
import login from '../controller/login.js';

export default [
    {
        method: 'GET',
        path: '/login',
        handler: (request, h) => {
            const result = login.authenticate(request.payload);
            return h.response(result).code(200);
        },
        options: {
            auth: {
              strategy: 'simple',
            },
          },
    }
];
