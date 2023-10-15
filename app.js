'use strict';

import Hapi from '@hapi/hapi';

import routes from './server/route/index.js';

const init = async () => {

    const server = Hapi.server({
        port: 8000,
        host: 'localhost',
        routes: {
            cors: true
        }
    });

    server.route(routes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();