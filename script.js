// Función para encriptar el texto
function encriptar() {
    let texto = document.getElementById("input-text").value;
    if (validarTexto(texto)) {
        let textoCifrado = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        // Ocultar la imagen y el texto inicial
        document.querySelector(".right-panel img").style.display = "none";
        document.querySelector(".right-panel .message-title").style.display = "none";
        document.querySelector(".right-panel .message-subtitle").style.display = "none";

        // Mostrar el texto encriptado y el botón de copiar
        let outputArea = document.querySelector(".right-panel .output-text");
        outputArea.style.display = "block";
        outputArea.textContent = textoCifrado;

        document.querySelector(".right-panel .copy-btn").style.display = "inline-block";

    } else {
        alert("El texto solo debe contener letras minúsculas y sin acentos.");
    }
}

// Función para desencriptar el texto
function desencriptar() {
    let texto = document.getElementById("input-text").value;
    if (validarTexto(texto)) {
        let textoDescifrado = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        // Ocultar la imagen y el texto inicial
        document.querySelector(".right-panel img").style.display = "none";
        document.querySelector(".right-panel .message-title").style.display = "none";
        document.querySelector(".right-panel .message-subtitle").style.display = "none";

        // Mostrar el texto desencriptado y el botón de copiar
        let outputArea = document.querySelector(".right-panel .output-text");
        outputArea.style.display = "block";
        outputArea.textContent = textoDescifrado;

        document.querySelector(".right-panel .copy-btn").style.display = "inline-block";

    } else {
        alert("El texto solo debe contener letras minúsculas y sin acentos.");
    }
}

// Función para copiar el texto al portapapeles
function copiarTexto() {
    let texto = document.querySelector(".right-panel .output-text").textContent;
    navigator.clipboard.writeText(texto).then(() => {
        alert("Texto copiado al portapapeles.");
    });
}

// Función para validar el texto (solo minúsculas y sin caracteres especiales)
function validarTexto(texto) {
    let regex = /^[a-z\s]*$/;
    return regex.test(texto);
}