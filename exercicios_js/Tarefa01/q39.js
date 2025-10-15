let status = 'P'
switch (status) {
    case 'P':
        console.log("Pendente")
        break
    case 'E':
        console.log("Em Processamento")
        break
    case 'F':
        console.log("Finalizado")
        break
    default:
        console.log("Status desconhecido")
}
