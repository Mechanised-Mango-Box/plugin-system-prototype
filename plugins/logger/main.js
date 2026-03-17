const { time } = require("node:console");

module.exports = {
    name: 'LoggerPlugin',

    onInit() {
        console.log('[LoggerPlugin] Loaded');
    },

    onRefresh() {
        console.log(`[LoggerPlugin] Refreshed @ ${new Date()}`);
    },

    onFree() {
        console.log('[LoggerPlugin] Unloaded');
    },
};
