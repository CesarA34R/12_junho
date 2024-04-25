<?php

if ($_SERVER["REQUEST_METHOD"] == "GET") {
    
    if (isset($_GET['opcao1']) && $_GET['opcao1'] == 'b_break' &&
        isset($_GET['opcao2']) && $_GET['opcao2'] == 'meu_universo' &&
        isset($_GET['opcao3']) && $_GET['opcao3'] == 'lanche_break') {
        
        header("Location: ../view/sucesso.html");
        exit;
    } else {
        header("Location: ../view/tente_novamente.html");
    }
}
?>

