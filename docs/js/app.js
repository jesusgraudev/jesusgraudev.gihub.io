const textos = [
    "Soy Jesús Grau.",
    "Un desarrollador web.",
    "Diseño interfaces limpias.",
    "Estoy creando mi portafolio.",
    "Estudiante de Platzi Academy"
  ];

  let indexTexto = 0;
  let indexLetra = 0;
  let escribiendo = true;
  const cambiador = document.getElementById("cambiador");

  function animarTexto() {
    const textoActual = textos[indexTexto];

    if (escribiendo) {
      cambiador.textContent = textoActual.substring(0, indexLetra + 1);
      indexLetra++;

      if (indexLetra === textoActual.length) {
        escribiendo = false;
        setTimeout(animarTexto, 1500); // Espera antes de empezar a borrar
        return;
      }
    } else {
      cambiador.textContent = textoActual.substring(0, indexLetra - 1);
      indexLetra--;

      if (indexLetra === 0) {
        escribiendo = true;
        indexTexto = (indexTexto + 1) % textos.length;
      }
    }

    setTimeout(animarTexto, escribiendo ? 100 : 50); // velocidad: escribir lento, borrar rápido
  }

  animarTexto();