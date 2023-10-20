/**
 * Funds routes.
 */

import funds from '../controller/funds.js';
import Joi from 'joi';
const path = '/funds';

export default [
    {
        method: 'GET',
        path: `${path}/{id}`,
        handler: funds.getBalance,
        options: {
            auth: 'jwt'
        }
    },
    {
        method: 'PUT',
        path: `${path}/{id}/add`,
        handler: funds.addAmount,
        options: {
            validate: {
                payload: Joi.object({
                    amount: Joi.number().min(0.01).required()
                })
            },
            auth: 'jwt'
        },
    },
    {
        method: 'PUT',
        path: `${path}/{id}/remove`,
        handler: funds.removeAmount,
        options: {
            validate: {
                payload: Joi.object({
                    amount: Joi.number().max(-0.01).required()
                })
            }
        }
    }
];