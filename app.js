'use strict';

import Hapi from '@hapi/hapi';
import HapiAuthJWT from 'hapi-auth-jwt2';
import routes from './server/route/index.js';
import { validateJWT } from './server/controller/login.js'

const init = async () => {

    const server = Hapi.server({
        port: 8000,
        host: 'localhost',
        routes: {
            cors: true
        }
    });

    await server.register(HapiAuthJWT);
    server.auth.strategy('jwt', 'jwt', {
        key: 'CarlosAlcaraz',
        validate: validateJWT
    })
    server.state('jwt', { isSecure: false })

    server.route(routes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();