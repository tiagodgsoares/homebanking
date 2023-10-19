/**
 * Subscribe routes.
 */

import subscribe from '../controller/subscribe.js';
import Joi from 'joi';

export default [
    {
        method: 'POST',
        path: '/subscribe',
        handler: (request, h) => {
            const result = subscribe.register(request.payload);
            return h.response(result).code(200);
        },
        options: {
            validate: {
                payload: Joi.object({
                    email: Joi.string().email(),
                    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
                })
            }
        }
    }
];
