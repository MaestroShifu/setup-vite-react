module.exports = {
    compact: false,
    presets: [
        [
            '@babel/preset-env', { 
                targets: { 
                    node: 'current' 
                }
            }
        ],
        [
            '@babel/preset-react', 
            {
                runtime: 'automatic'
            }
        ],
        '@babel/preset-typescript',
    ]
};