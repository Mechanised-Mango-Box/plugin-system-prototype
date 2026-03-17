const { time } = require("node:console");

module.exports = {
    name: 'LoggerPlugin',

    onInit() {
        console.log('[LoggerPlugin] Loaded');
    },
    onFree() {
        console.log('[LoggerPlugin] Unloaded');
    },

    onRefresh() {
        console.log(`[LoggerPlugin] Refreshed @ ${new Date()}`);
    },

};
