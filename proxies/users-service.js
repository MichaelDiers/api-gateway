const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');

/**
 * Add the users service proxy to the express application.
 * @param {express.Application} app An express application. 
 */
const addProxy = (({ app }) => {
    app.use(
        '/api/v1/users-service',
        createProxyMiddleware({
            target: process.env.GATEWAY_TARGET_USERS_SERVICE,
            pathRewrite: {
                '/api/v1/users-service':'/users',
            },
            changeOrigin: true,
            logLevel: 'debug'
        }),
    );
});

module.exports = addProxy;
