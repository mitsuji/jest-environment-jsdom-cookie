function login(url, csrfToken, loginKey, loginPassword) {
    let f = (resolve, reject) => {
        let req = new XMLHttpRequest();
        let endpoint = url + "/api/login";
        req.open("POST", endpoint);
        req.onload = function (e) {
            if (req.readyState === req.DONE) {
                if (req.status === 200) {
                    resolve(req.responseText);
                } else {
                    reject(req.responseText);
                }
            }
        };
        let postData = "";
        postData += "loginKey=" + encodeURIComponent(loginKey);
        postData += "&loginPassword=" + encodeURIComponent(loginPassword);
        req.setRequestHeader("X-CSRF-TOKEN", csrfToken);
        req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        req.send(postData);
    };
    return new Promise (f);
}

export {login};
