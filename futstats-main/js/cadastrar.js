document.querySelector("#botao-cadastrar").addEventListener("click", () => {
    
// Pegar os valores dos inputs

    const nome = document.querySelector('#nome').value;
    const time = document.querySelector('#time').value;
    const gols = parseInt(document.querySelector('#gols').value);
    const assistencias = parseInt(document.querySelector('#assistencias').value);  

// Criar um objeto chamado jogador com esses valores

    const jogador = {
        id: new Date().getTime(),
        nome: nome || "Ronaldo", // Usando valor padrão se não houver input
        time: time || "Real Madrid", // Usando valor padrão se não houver input
        gols: gols || 100, // Usando valor padrão se não houver input
        assistencias: assistencias || 3, // Usando valor padrão se não houver input
        foto: "https://cdn.footystats.org/img/players/portugal-cristiano-ronaldo.png"
    };
    
// Salvar o objeto no localStorage usando a chave "jogadores"

const jogadores = JSON.parse(localStorage.getItem('jogadores')) || [];

jogadores.push(jogador);

localStorage.setItem('jogadores', JSON.stringify(jogadores));


    // Redirecionar o usuário para a página inicial

    window.location.href = "/index.html";
});
