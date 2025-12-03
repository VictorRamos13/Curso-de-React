// 1. Importa o módulo 'readline' do Node.js, que serve para ler e escrever no terminal.
const readline = require('readline');

// 2. Cria a interface para se comunicar com o terminal.
const rl = readline.createInterface({
    input: process.stdin, // Configura para ler a entrada do teclado.
    output: process.stdout // Configura para escrever a saída no terminal.
});

// 3. Faz a pergunta ao usuário.
// O primeiro argumento é a pergunta que será exibida.
// O segundo é uma "função de callback" que será executada assim que o usuário apertar Enter.
rl.question('Por favor, digite o seu nome: ', (nome) => {
    // 4. A resposta do usuário é recebida na variável 'nome'.
    // Agora, exibimos a saudação na tela usando o nome fornecido.
    console.log(`\nOlá, ${nome}! Seja bem-vindo(a).`);

    // 5. Fecha a interface do readline. É crucial fazer isso para que o programa termine.
    rl.close();
});
