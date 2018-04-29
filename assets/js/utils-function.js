// Fonction de cryptage
function encrypted(string){
    var encrypted = CryptoJS.AES.encrypt(string, "Secret Passphrase");
    return encrypted;
}

function decrypted(encrypted) {
    var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
    return decrypted.toString(CryptoJS.enc.Utf8);
}


function appendFormPost() {
    var formContent = '';
    formContent += '<input type="text" class="input-post" name="plateforme" placeholder="Plateforme" required>';
    formContent += '<input type="email" class="input-post" name="email" placeholder="Email" required>';
    formContent += '<input type="text" class="input-post" name="password" placeholder="Password" required>';
    return formContent;
}