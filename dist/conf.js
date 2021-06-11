"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const protractor_1 = require("protractor");
exports.config = {
    directConnect: true,
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
            w3c: false
        }
    },
    specs: ['**/calculator.spec.js'],
    onPrepare: () => {
        protractor_1.browser.waitForAngularEnabled(false);
    }
    // seleniumAddress: 'http://localhost:4444/wd/hub',
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQTZDO0FBRWxDLFFBQUEsTUFBTSxHQUFXO0lBQzFCLGFBQWEsRUFBRSxJQUFJO0lBQ25CLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLG9CQUFvQixFQUFFO1lBQ3BCLEdBQUcsRUFBRSxLQUFLO1NBQ1g7S0FDRjtJQUNELEtBQUssRUFBRSxDQUFDLHVCQUF1QixDQUFDO0lBQ2hDLFNBQVMsRUFBRSxHQUFFLEVBQUU7UUFDYixvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRixtREFBbUQ7Q0FDbkQsQ0FBQyJ9