/**
 * Login routes.
 */
import login from '../controller/login.js';
import Joi from 'joi';

export default [
    {
        method: 'POST',
        path: '/login',
        handler: login.authenticate,
        options: {
            validate: {
                payload: Joi.object({
                    email: Joi.string().required(),
                    password: Joi.string().required()
                })
            }
        }
    }
];
