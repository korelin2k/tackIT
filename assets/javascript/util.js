const hashString = 'ZUVvShFSES21qHsQEqZXMxQ9zgHy';

function encryptString(data) {
    let encryptedPW = CryptoJS.AES.encrypt(JSON.stringify(data), hashString,
    {
       keySize: 128 / 8,
       iv: hashString,
       mode: CryptoJS.mode.CBC,
       padding: CryptoJS.pad.Pkcs7
     }).toString();

    return encryptedPW;
}

function decryptString(data) {
    let decryptedPW = JSON.parse(CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(data, hashString,
    {
       keySize: 128 / 8,
       iv: hashString,
       mode: CryptoJS.mode.CBC,
       padding: CryptoJS.pad.Pkcs7
    })));

    return decryptedPW;
}

// Read a page's GET URL variables and return them as an associative array.
function getUrlVars()
{
    let vars = [], hash;
    let hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(let i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

let emailData = {
    service_id: 'gmail',
    user_id: 'user_LhVxw7bxvmWOzZmutMDb6',
    template_params: {}
};

function sendMail (emailData) {
    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(emailData),
        contentType: 'application/json'
    }).done(function () {
        console.log('SUCCESS!');
    }).fail(function (error) {
        alert('Oops... ' + JSON.stringify(error));
    });
}