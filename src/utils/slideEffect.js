function slideEffect2() {
  const imagem3 = document.getElementById("imagem3");
  const imagem4 = document.getElementById("imagem4");

  imagem3.classList.remove("fade-out");
  // Definir classe para fade-in
  imagem3.classList.add("fade-in");

  setTimeout(() => {
    // Remover classe para fade-in e adicionar classe para fade-out
    imagem3.classList.remove("fade-in");
    imagem3.classList.add("fade-out");

    setTimeout(() => {
      // Remover classe para fade-out
      imagem4.classList.remove("fade-out");
      imagem4.classList.add("fade-in");

      // Definir classe para fade-in
      setTimeout(() => {
        imagem4.classList.remove("fade-in");
        imagem4.classList.add("fade-out");
        // Remover classe para fade-in e adicionar classe para fade-out

        setTimeout(() => {
          // Remover classe para fade-out
          // imagem3.classList.remove("fade-out");

          // Chamar a função novamente para reiniciar o loop
          slideEffect();
        }, 1000); // Aguardar 1 segundo antes de iniciar o fade-out da imagem2
      }, 5000); // Aguardar 5 segundos antes de passar para a próxima imagem
    }, 1000); // Aguardar 1 segundo antes de iniciar o fade-out da imagem1
  }, 5000); // Aguardar 5 segundos antes de iniciar o fade-out da imagem1
}

function slideEffect() {
  const imagem1 = document.getElementById("imagem1");
  const imagem2 = document.getElementById("imagem2");
  const imagem3 = document.getElementById("imagem3");
  const imagem4 = document.getElementById("imagem4");

  // Definir classe para fade-in
  imagem1.classList.remove("fade-out");
  imagem1.classList.add("fade-in");

  setTimeout(() => {
    // Remover classe para fade-in e adicionar classe para fade-out
    imagem1.classList.remove("fade-in");
    imagem1.classList.add("fade-out");

    setTimeout(() => {
      // Remover classe para fade-out
      imagem2.classList.remove("fade-out");
      imagem2.classList.add("fade-in");

      // Definir classe para fade-in
      setTimeout(() => {
        imagem2.classList.remove("fade-in");
        imagem2.classList.add("fade-out");
        // Remover classe para fade-in e adicionar classe para fade-out

        setTimeout(() => {
          // Remover classe para fade-out
          // imagem1.classList.remove("fade-out");

          // Chamar a função novamente para reiniciar o loop
          slideEffect2();
        }, 1000); // Aguardar 1 segundo antes de iniciar o fade-out da imagem2
      }, 5000); // Aguardar 5 segundos antes de passar para a próxima imagem
    }, 1000); // Aguardar 1 segundo antes de iniciar o fade-out da imagem1
  }, 5000); // Aguardar 5 segundos antes de iniciar o fade-out da imagem1
}

export default slideEffect;
