function carregarAba(nomeAba) {
    // Busca o arquivo dentro da pasta /pages/
    fetch(`pages/${nomeAba}.html`)
        .then(response => response.text())
        .then(html => {
            document.getElementById('conteudo-dinamico').innerHTML = html;
        })
        .catch(err => console.error('Erro ao carregar a aba:', err));
}