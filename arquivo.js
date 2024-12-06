
        // Função para rolar para o topo
        function voltarAoTopo() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }

        // Exibir ou ocultar o botão com base na posição da página
        window.onscroll = function () {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                document.getElementById("voltar-ao-topo").style.display = "block";
            } else {
                document.getElementById("voltar-ao-topo").style.display = "none";
            }
        };
    