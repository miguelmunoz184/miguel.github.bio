function copiar() {
    let copiar = document.getElementById("mensaje");
    let copiar2 = document.getElementById("texto");
  
    copiar.select();
    document.execCommand("copy");
    alert("¡Texto copiado con Exito!");
    copiar.value = "";
    copiar2.value = "";
  
    if (copiar.lenght != 0) {
      document.getElementById("mensaje").style.display = "none";
      document.getElementById("btn-copiar").style.display = "none";
    }
  }
  
  function encriptar() {
    let texto = document.getElementById("texto").value;
    let textoRemplazado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.lenght != 0) {
      texto = textoRemplazado;
      document.getElementById("texto").value = "";
      document.getElementById("mensaje").value = texto;
      document.getElementById("mensaje").style.display = "block";
      document.getElementById("btn-copiar").style.display = "block";
    }
  }
  
  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let textoRemplazado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
  
    if (texto.lenght != 0) {
      texto = textoRemplazado;
      document.getElementById("texto").value = "";
      document.getElementById("mensaje").value = texto;
      document.getElementById("mensaje").style.display = "block";
      document.getElementById("btn-copiar").style.display = "block";
    }
  }
  
  function soloMinusculas() {
    let textarea = document.getElementById("texto");
    let contenido = textarea.value;
  
    let contenidoSinCaracteres = contenido.replace(/[^a-zA-Z\s]/g, "");
  
    let contenidoEnMinusculas = contenidoSinCaracteres.toLowerCase();
  
    textarea.value = contenidoEnMinusculas;
  }
  