document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('quizForm');
    const submitButton = document.getElementById('submitButton');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        const respostasCorretas = {
            opcao1: 'b_break',
            opcao2: 'meu_universo',
            opcao3: 'lanche_break'
        };
        const respostasUsuario = {
            opcao1: getRadioValor('opcao1'),
            opcao2: getRadioValor('opcao2'),
            opcao3: getRadioValor('opcao3')
        };

        if (respostasCorretas.opcao1 === respostasUsuario.opcao1 &&
            respostasCorretas.opcao2 === respostasUsuario.opcao2 &&
            respostasCorretas.opcao3 === respostasUsuario.opcao3) {
            window.location.href = 'sucesso.html';
        } else {
            window.location.href = 'tente_novamente.html';
        }
    });

    function getRadioValor(name) {
        const radios = document.getElementsByName(name);
        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                return radios[i].value;
            }
        }
        return null; // se nenhum estiver selecionado
    }
});
>>>>>>> Stashed changes
