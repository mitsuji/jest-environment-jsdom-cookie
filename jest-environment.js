import mod from "jest-environment-jsdom";
const JSDOMEnvironment = mod.default;

export default class CookieJSDOMEnvironment extends JSDOMEnvironment {
  constructor(config, options) {
    super(config, options);
    const {url,csrfToken,cookieString} = config.projectConfig.testEnvironmentOptions;
    this.global.url = url;
    this.global.csrfToken = csrfToken;
    this.dom.cookieJar.setCookieSync(cookieString,url);
  }
  async teardown() {
    this.global.url = null;
    this.global.csrfToken = null;
    await super.teardown();
  }
}
