const path = require('path');
const yargs = require('yargs').argv;
const reporter = require('cucumber-html-reporter');
const cucumberJunitConvert = require('cucumber-junit-convert');

const junitOptions = {
    inputJsonFile: path.join(__dirname, `../../test/reports/report.json`),
    outputXmlFile: path.join(__dirname, `../../test/reports/report.xml`),
}

const reporterOptions = {
    theme: 'bootstrap',
    jsonFile: path.join(__dirname, `../../test/reports/report.json`),
    output: path.join(__dirname, `../../test/reports/report.html`),
    reportSuiteAsScenarios: true,
    launchReport: true
};

exports.config = {

    allScriptsTimeout: 60000,
    getPageTimeout: 60000,
    specs: [path.resolve('./test/features/*.feature')],
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    capabilities: {
        shardTestFiles: yargs.instances > 1,
        maxInstances: yargs.instances || 1,
        browserName: 'chrome',
        chromeOptions: {
            args: ['--no-sandbox', '--window-size']
        }
    },
    disableChecks: true,
    directConnect: true,
    cucumberOpts: {
        require: ["../step_definitions/*.js"],
        ignoreUncaughtExceptions: true,
        format: [`json:../reports/report.json`, `../../node_modules/cucumber-pretty`],
        tags: yargs.tags || '@smoke'
    },
    afterLaunch: async () => {
        await reporter.generate(reporterOptions);
        await cucumberJunitConvert.convert(junitOptions);
    }
}