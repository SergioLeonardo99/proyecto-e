export default class Seguridad {
    constructor(){
        this.forge = require('node-forge');
        this.key = '0I9kmR!M5P3d50^K';
        this.iv = 'V0qDxYf5@S1$3S5*';
    }
    returnSecurity(){
        console.log('key: '+this.key)
        console.log('iv: '+this.iv)
    }
    cipher(text){
        var cipher = this.forge.cipher.createCipher('AES-CBC', this.key);
        var iv =this.iv
        cipher.start({iv: iv});
        cipher.update(this.forge.util.createBuffer(text, 'utf-8'));
        cipher.finish();
        var encrypted = cipher.output;
        // outputs encrypted hex
        return encrypted.toHex()
        

    }
    decrypt(text){
        var ciphertext = this.forge.util.hexToBytes(text);
        var decipher = this.forge.cipher.createDecipher('AES-CBC', this.key);
        var iv =this.iv
        decipher.start({iv: iv});
        decipher.update(this.forge.util.createBuffer(ciphertext));
        var result = decipher.finish(); // check 'result' for true/false
        // outputs decrypted hex
        var decrypted = decipher.output
        return decrypted;
        
    }
  }

