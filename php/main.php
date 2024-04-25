<?php
// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Verifica se todas as opções corretas foram selecionadas
    if (isset($_GET['opcao1']) && $_GET['opcao1'] == 'b_break' &&
        isset($_GET['opcao2']) && $_GET['opcao2'] == 'meu_universo' &&
        isset($_GET['opcao3']) && $_GET['opcao3'] == 'lanche_break') {
        // Redireciona o usuário para a página de sucesso
        header("Location: ../view/sucesso.html");
        exit;
    } else {
        // Se as opções selecionadas não estiverem corretas, exibe uma mensagem de erro ou faz alguma outra ação
        echo "Você errou! Tente novamente.";
    }
}
?>

