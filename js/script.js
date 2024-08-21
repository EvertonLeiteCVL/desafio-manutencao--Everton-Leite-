function mostrarMensagem() {
    alert('Saiba Mais clicado!');
}

// chamando função para mostrar os produtos
function mostrarProdutos() {
    alert('Conheça nossos Produtos!');
    // Seria necessário adicionar os códigos dos produtos
}

// chamando função para garantir que o ano da página esteja sempre atualizado
function atualizarCopyright() {
    const anoAtual = new Date().getFullYear();
    const copyrightTexto = `© ${anoAtual} XPTO Corporation. Todos os direitos reservados.`;
    document.getElementById('copyright').textContent = copyrightTexto;
}

// Atualiza o texto de direitos reservados quando a página é carregada
atualizarCopyright();