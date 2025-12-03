/**
 * Função (Arrow Function) assíncrona para buscar e listar 10 produtos 
 * da Fake Store API.
 */
const listarDezProdutos = async () => {
  
  // Opcional: Mostrar um "spinner" de carregamento
  console.log("Carregando catálogo de produtos... ⏳");
  // exibirLoading(true);

  try {
    // 1. TENTAR a operação de rede
    const url = "https://fakestoreapi.com/products?limit=10";
    const resposta = await fetch(url);
    

    // 2. VERIFICAR se a resposta da API foi bem-sucedida
    if (!resposta.ok) {
        
      // Se a resposta NÃO foi ok (ex: 500 Erro de Servidor),
      // forçamos um erro para pular para o bloco 'catch'.
      throw new Error(`Erro HTTP! Status: ${resposta.status}`);
    }

    // 3. TENTAR processar a resposta (converter o JSON)
    // Esperamos um ARRAY de objetos
    const listaDeProdutos = await resposta.json();

    // 4. SUCESSO!
    console.log("=>>>> Sucesso! Catálogo carregado:");

    // Iterar sobre o array e exibir os títulos
    listaDeProdutos.forEach((produto, index) => {
      console.log(`${index + 1}. ${produto.title} => $ ${produto.price}`);
    });
    
    // renderizarCatalogo(listaDeProdutos);

  } catch (erro) {
    // 5. CAPTURAR qualquer erro que tenha ocorrido no 'try'
    console.error("=>>>>> Ops! Falha ao carregar o catálogo de produtos.");
    console.error("Mensagem de erro:", erro.message);
    
    // exibirMensagemDeErro("Não foi possível carregar os produtos. Tente mais tarde.");

  } finally {
    // 6. FINALIZAR
    // Executa sempre, dando certo ou errado.
    console.log("Operação de listagem finalizada.");
    // exibirLoading(false);
  }
};

listarDezProdutos();