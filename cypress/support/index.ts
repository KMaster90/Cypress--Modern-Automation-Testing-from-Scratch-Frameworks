export {}
declare global {
    namespace Cypress {
        interface Chainable {
            iframeLoaderPaolo(iframeSelector: string):void;
            iframePaolo():  Cypress.Chainable<HTMLIFrameElement>;
            selectProduct(...productName: string[]): void;
        }
    }
}


declare global {
    interface String {
        toTitleCase(): string;
    }
}


