const PluginManager = require('./core/pluginManager');

const manager = new PluginManager();
manager.plugins = [

]


manager.discover(["logger"]);
manager.initAll();


manager.refreshAll();


manager.freeAll();
