`use strict`;

module.exports = {
    apps: [
        {
            name: 'pannel',
            script: './index.js',
            instance: 0,
            exec_mode: 'cluster',
            autorestart: true,
            watch: false,
        }
    ]
};
