
document.getElementById('meuBotao').addEventListener('click', function() {
    alert('JavaScript funcionando!');
});

// Função para compartilhar no Facebook
function shareFacebook() {
    // URL da sua página
    var url = 'https://seusite.com/pagina';

    // Abre a janela de compartilhamento do Facebook
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url), 'Compartilhar no Facebook', 'width=600,height=400');
}
// Função para compartilhar no Twitter
function shareTwitter() {
    // Texto para compartilhar (pode incluir hashtags e @menções)
    var text = 'Confira este conteúdo incrível!';

    // URL da sua página
    var url = 'https://seusite.com/pagina';

    // Abre a janela de compartilhamento do Twitter
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(text) + '&url=' + encodeURIComponent(url), 'Compartilhar no Twitter', 'width=600,height=400');
}
