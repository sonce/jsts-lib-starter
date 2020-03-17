var path = require('path');

var cdkit = require('cdkit');


var fromName1 = 'ASheng';
var toName1 = 'sonce';

var fromName2 = 'quickapp-h5';
var toName2 = 'JSTS-Lib-Starter';


function getFullPath (filename) {
    return path.join(__dirname, filename)
}

var map = [
    getFullPath('package.json'),
    getFullPath('README.md'),
    getFullPath('README.zh-CN.md'),
    getFullPath('config/rollup.js'),
    getFullPath('test/browser/index.html'),
    getFullPath('demo/demo-global.html'),
];

const config = [
    {
        root: '.',
        rules: [
            {
                test: function (pathname) {
                    return map.some(function (u) {
                        return pathname.indexOf(u) > -1;
                    });
                },
                replace: [
                    {
                        from: fromName1,
                        to: toName1,
                    },
                    {
                        from: fromName2,
                        to: toName2,
                    }
                ]
            }
        ]
    },
];

cdkit.run('replace', config);
