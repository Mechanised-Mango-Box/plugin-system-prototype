class PluginManager {
    plugins = [];

    discover(pluginPaths) {
        this.plugins = pluginPaths.map(name => ({
            name,
            module: require(`${__dirname}/../plugins/${name}/main.js`)
        }));
    }


    initAll() {
        this.plugins.forEach(plugin => {
            console.log(`[INIT] Starting: ${plugin.name}`)
            plugin.module.onInit();
            console.log(`[INIT] Started: ${plugin.name}`)
        });
    }

    freeAll() {
        this.plugins.forEach(plugin => {
            console.log(`[FREE] Freeing: ${plugin.name}`)
            plugin.module.onFree();
            console.log(`[FREE] Freed: ${plugin.name}`)
        });
    }


    refreshAll() {
        this.plugins.forEach(plugin => {
            if (plugin.onRefresh === null) {
                return;
            }
            console.log(`[REFRESH] Refreshing: ${plugin.name}`)
            plugin.module.onRefresh();
            console.log(`[REFRESH] Refreshed: ${plugin.name}`)
        });
    }
}

module.exports = PluginManager;
