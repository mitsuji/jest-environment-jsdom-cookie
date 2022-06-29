# jest-environment-jsdom-cookie

testEnvironment for jest that supports testing with CSRF-tokens and cookies.

## prepare
Set URL, CSRF-token and cookie in package.json.

You can refer it as global.url or global.csrfToken in your test code.

Also the cookieString is sent in the request header.

```json
        "testEnvironmentOptions": {
            "url": "http://localhost:8080",
            "csrfToken": "XXXXXX",
            "cookieString": "some_session_shared_key=YYYYYYYY"
        },
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
