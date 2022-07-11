import mod from "jest-environment-jsdom";
const JSDOMEnvironment = mod.default;

export default class CookieJSDOMEnvironment extends JSDOMEnvironment {
  constructor(config, options) {
    super(config, options);
    const {url} = config.projectConfig.testEnvironmentOptions;
    this.global.url = url;
    this.global.setCookie = (function (key, val) {
      this.setCookieSync(key + "=" + val, url);
    }).bind(this.dom.cookieJar);
  }
  async teardown() {
    this.global.url = null;
    this.global.setCookie = null;
    await super.teardown();
  }
}
