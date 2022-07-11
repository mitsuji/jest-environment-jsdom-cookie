# jest-environment-jsdom-cookie

testEnvironment for jest that supports testing with CSRF-tokens and cookies.

## prepare

### package.json
Set URL in package.json.

You can refer it as global.url in your test code.

```json
        "testEnvironmentOptions": {
            "url": "http://localhost:8080"
        },
```

### jest-setup.js
call setCookie in jest-setup.js.

Cookie is sent in the request header in every request.

```javaScript
global.setCookie ("rawboat_session_shared_key", "YYYYYYYY");
global.csrfToken = "XXXXXX";
```

## install

```bash
$ npm install jest
$ npm install jest-environment-jsdom
```

## run

```bash
$ npm test
```
