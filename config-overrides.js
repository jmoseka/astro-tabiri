module.exports = function override(config, env) {
    console.log('override')
    let loaders = config.resolve
    loaders.fallback = {
        "zlib": require.resolve("browserify-zlib"),
        "os": require.resolve("os-browserify/browser"),
        "assert": require.resolve('assert'),
        "stream": require.resolve('stream-browserify'),
    }

    return config
}