const conexaoBancoDeDados = () => {
    //Simulando uma conexão de banco de dados!
    const conectado = false;
    if (conectado) {
        return "ID_Conexão1234";
    }
    else{
        throw new Error("Erro de timeout: não foi possível conexão com o banco de dados");
    }

};

const login = (usuario, senha) => {
    const conexao = conexaoBancoDeDados();
    console.log(`ID de conexão: ${conexao}`);
    console.log(`Validando credenciais da conta ${usuario}`);
    return 0;

};

try{
    const autenticacao = login("fulano", "123456");
    console.log('Login bem sucedido');

}
catch(erro){
    console.error(`${erro.message}`);
    console.error("Não foi possível validar suas credenciais. Tente mais tarde");

}
finally{
    console.log('Gravando log de login ou de tentativa de login!')

}