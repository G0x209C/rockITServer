const path =require('path');

module.exports = {
    outputDir: path.resolve('/home/gc/dev/rockITServer/public'),
    devServer:
        {
            proxy:
                {
                    '/api':
                        {
                            target: 'http://localhost:3000'
                        }
                }
        }
}