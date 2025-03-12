module.exports = {
    apps: [
        {
            name: 'rpworld', 
            exec_mode: 'cluster',
            instances: 'max', 
            script: './.output/server/index.mjs',
            port: '9000',
        }
    ]
}