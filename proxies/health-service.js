const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');

/**
 * Add the health service proxy to the express application.
 * @param {express.Application} app An express application. 
 */
const addProxy = (({ app }) => {
    app.use(
        '/api/v1/health-service',
        createProxyMiddleware({
            target: process.env.GATEWAY_TARGET_HEALTH_SERVICE,
            pathRewrite: {
                '/api/v1/health-service':'/',
            },
            changeOrigin: true,
            headers: {
                [process.env.GATEWAY_API_KEY_HEADER_NAME]: process.env.GATEWAY_TARGET_HEALTH_SERVICE_API_KEY,
            },
        }),
    );
});

module.exports = addProxy;
