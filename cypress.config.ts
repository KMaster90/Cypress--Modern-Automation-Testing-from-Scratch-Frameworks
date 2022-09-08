const {defineConfig} = require("cypress");
const HOME = "https://rahulshettyacademy.com"
module.exports = defineConfig({
    projectId: "jbqxcn",
    reporter: 'mochawesome',
    reporterOptions: {
        reportDir: 'cypress/results',
        overwrite: false,
        html: false,
        json: true
    },
    e2e: {
        baseUrl: HOME,
        env: {
            home: `${HOME}/seleniumPractise/#/`,
            angularPractice: `${HOME}/angularpractice/`,
            automationPractice: `${HOME}/AutomationPractice/`,
            qaclickacademy:`https://qaclickacademy.com`
        },
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        // specPattern: "**/*.cy.[jt]s",
        specPattern: "**/*.cy.[t]s",
        // defaultCommandTimeout: 4000,
        experimentalSessionAndOrigin: true,
        video: false,
    },
});
