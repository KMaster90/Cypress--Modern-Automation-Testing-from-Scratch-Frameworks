const report = require('multiple-cucumber-html-reporter');
report.generate({
    jsonDir: 'cypress/cucumber-json',
    reportPath: './reports/cucumber-html-report.html',
    metadata: {
        browser: {
            name: 'chrome',
            version: 'chrome://version  -   105.0.5195.102'
        },
        device: 'Local test machine',
        platform: {
            name: 'ubuntu',
            version: '16.04'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Custom project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: new Date().toLocaleString()},
            {label: 'Execution End Time', value: new Date().toLocaleString()}
        ]
    }
});


