exports.config = {
    runner: 'browser',
    specs: [
        './example.test.js'
    ],
    capabilities: [{
        browserName: 'firefox'
    }],
    logLevel: 'debug',  // trace | debug | info | warn | error | silent
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 10000
    },
};
