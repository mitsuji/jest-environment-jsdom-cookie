import {login} from './common/login.js';

test('login success', () => {
    return login(global.url,global.csrfToken,"username","abcdefg1")
        .then(responseText => {
            expect(responseText).toBe("true");
        });
});

test('login fail', () => {
    return login(global.url,global.csrfToken,"username","abcdefg2")
        .then(responseText => {
            expect(responseText).toBe("false");
        });
});

