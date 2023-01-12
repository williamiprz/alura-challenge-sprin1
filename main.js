var entradaTexto = document.getElementById('input-text');
var encriptar = document.getElementById('encriptar');
var desencriptar = document.getElementById('desencriptar');
var copiar = document.getElementById('copy-button');
function encriptar_string () {
    if (entradaTexto.value == '') {
        appear_img();
    } else {
        var texto = entradaTexto.value;
        var crypt_decrypt = document.getElementById('whatis');
        var encriptado = '';
        [...texto].forEach(element => {
            if (element == 'a'){
                encriptado += 'ai'
            }
            else if (element == 'e'){
                encriptado += 'enter'
            }
            else if (element == 'i'){
                encriptado += 'imes'
            }
            else if (element == 'o'){
                encriptado += 'ober'
            }
            else if (element == 'u'){
                encriptado += 'ufat'
            } else {
                encriptado += element;
            }
        });
        entradaTexto.value = '';
        dissapear_img(encriptado);
        crypt_decrypt.innerHTML = 'Texto encriptado';
    }
}

function desencriptar_string () {
    if (entradaTexto.value == '') {
        appear_img();
    } else {
        var texto_des = entradaTexto.value;
        var crypt_decrypt = document.getElementById('whatis');
        var desencriptado = texto_des;
        desencriptado = desencriptado.replaceAll('ai', 'a');
        desencriptado = desencriptado.replaceAll('enter', 'e');
        desencriptado = desencriptado.replaceAll('imes', 'i');
        desencriptado = desencriptado.replaceAll('ober', 'o');
        desencriptado = desencriptado.replaceAll('ufat', 'u');
        
        entradaTexto.value = '';
        dissapear_img(desencriptado);
        crypt_decrypt.innerHTML = 'Texto desencriptado';
    }
}

function dissapear_img (output) {
    var img_message = document.getElementById('img-message');
    var decrypt_area = document.getElementById('decrypt');
    img_message.style.display = 'none';
    decrypt_area.style.display = 'flex';
    var output_area = document.getElementById('crypt-decrypt');
    output_area.innerHTML = output;
}

function appear_img () {
    var img_message = document.getElementById('img-message');
    var decrypt_area = document.getElementById('decrypt');
    img_message.style.display = 'flex';
    decrypt_area.style.display = 'none';
    
}

function copiar_texto () {
    var copyText = document.getElementById('crypt-decrypt');
    navigator.clipboard.writeText(copyText.innerHTML).then(function() {
        console.log('Copia exitosa');
    }, function(err) {
        console.error('No se puedo copiar en el portapapeles ', err);
    });
}

encriptar.onclick = encriptar_string;
desencriptar.onclick = desencriptar_string;
copiar.onclick = copiar_texto;
