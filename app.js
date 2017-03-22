const express = require('express');
const ParseDashboard = require('parse-dashboard');

const config = {
    apps: [
        {
            "serverURL": process.env.serverURL || 'http://localhost:5000/parse',
            "appId": process.env.APP_ID || 'myAppKey',
            "masterKey": process.env.MASTER_KEY || 'masterKey',
            "appName": "Steve the Sassy Scrum Bot Dashboard",
            "production": true
        }
    ],
    users: [{
        user: "steve-admin",
        pass: "password"
    }],
    allowInsecureHttp: true
};

const dashboard = ParseDashboard(config, config.allowInsecureHttp);

const app = express();


app.use('/', dashboard);

var httpServer = require('http').createServer(app);
httpServer.listen(process.env.PORT  || 4040);
