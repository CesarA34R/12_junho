if (window.location.href.indexOf("POST") !== -1) {
     var opcao1 = document.querySelector('input[name="opcao1"]').value;
     var opcao2 = document.querySelector('input[name="opcao2"]').value;
     var opcao3 = document.querySelector('input[name="opcao3"]').value;
 
     if (opcao1 === 'b_break' && opcao2 === 'meu_universo' && opcao3 === 'lanche_break') {
         window.location.href = '../view/sucesso.html';
     } else {
         window.location.href = '../view/tente_novamente.html';
     }
 }