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
            console.log(request.payload)
            const result = subscribe.register(request.payload);
            return h.response(result).code(200);
            //como é q passo isto para o controller e retorno na mesma o user no controller?
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
