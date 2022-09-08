
const {defineConfig} = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
const HOME = "https://rahulshettyacademy.com";
const browserify = require("@cypress/browserify-preprocessor");
const resolve = require('resolve');



module.exports = defineConfig({
    // projectId: "jbqxcn", // for dashboard
    // reporter: 'mochawesome',    // for mocha report
    // reporterOptions: {          // for mocha report
    //     reportDir: 'cypress/results',
    //     overwrite: false,
    //     html: false,
    //     json: true
    // },
    e2e: {
        baseUrl: HOME,
        env: {
            // TAGS: "@FillForm",
            home: `${HOME}/seleniumPractise/#/`,
            angularPractice: `${HOME}/angularpractice/`,
            automationPractice: `${HOME}/AutomationPractice/`,
            qaclickacademy:`https://qaclickacademy.com`
        },
        setupNodeEvents(on, config) {
            const options = {
                ...browserify.defaultOptions,
                typescript: resolve.sync('typescript', { baseDir: config.projectRoot }),
            };
            on('file:preprocessor', cucumber(options))
        },
        // specPattern: "**/*.cy.[t]s", // Default Cypress

        specPattern: "cypress/e2e/examples/BDD/*.feature", // Cucumber
        experimentalSessionAndOrigin: true,
        video: false,
    },
});
