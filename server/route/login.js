/**
 * Login routes.
 */
import login from '../controller/login.js';

export default [
    {
        method: 'POST',
        path: '/login',
        handler: login.authenticate,
    }
];
