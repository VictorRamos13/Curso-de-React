try {
  // 1. Bloco try: Tentamos fazer algo que vai falhar.
  console.log("Iniciando o bloco try...");
  
  // A variável 'nome' não foi definida em lugar nenhum.
  // Isso vai causar um erro (ReferenceError).
  console.log(nome); 

  // Esta linha nunca será executada, pois o erro acontece antes.
  console.log("Terminando o bloco try...");

} catch (erro) {
  // 2. Bloco catch: O erro é "capturado" aqui.
  console.log("Ops! Um erro aconteceu!");
  console.log("Mensagem do erro:", erro.message); // Ex: "nome is not defined"

} finally {
  // 3. Bloco finally: Executado sempre, com ou sem erro.
  console.log("Bloco 'finally' executado. A operação terminou.");

 /*
  

O código entra no bloco try e imprime "Iniciando o bloco try...".

Na linha console.log(nome);, o JavaScript não encontra nenhuma variável chamada nome e gera um erro.

Imediatamente, o controle pula para o bloco catch.

O bloco catch é executado, imprimindo as mensagens de erro.

Por fim, o bloco finally é executado, imprimindo "Bloco 'finally' executado. A operação terminou.".
  
  */
}