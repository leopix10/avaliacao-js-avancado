const cardapio = document.getElementById('cardapio');
const telaCarregamento = document.getElementById('telaCarregamento');
const produtos = [];

const pegarProdutos = async () => {
    telaCarregamento.style.display = 'flex';
    const promise = await fetch('https://tech4japa.fly.dev/produtos');
    const response = await promise.json();

    const meusProdutos = response.filter(produto => produto.restaurante == "Kensai");

    meusProdutos.forEach(produto => {
        produtos.push(produto);
    });
    mostrarProdutos();
}

pegarProdutos();

const mostrarProdutos = async () => {
    telaCarregamento.style.display = 'none';
    const novaLista = await Promise.all(produtos.map(async (produtos) => {
        const promise = await fetch(`https://tech4japa.fly.dev/produtos/${produtos.id}`);
        const response = await promise.json();
        return response;
    }))
    novaLista.forEach(produto => {
        definirDadosProdutos(produto);
    })
}

const definirDadosProdutos = (produto) => {
    const div = document.createElement("div");
    div.className = "produtos";
    const img = document.createElement("img");
    img.id = "foto-produto"
    img.src = produto.imagem;
    const h2 = document.createElement("h2");
    h2.innerText = produto.produto;
    const p = document.createElement("p");
    p.innerText = produto.descricao;
    const link = document.createElement("a");
    link.href = `./detalhes.html?produtoId=${produto.id}`;
    const button = document.createElement("button");
    button.id = "detalhes";
    button.innerText = "Detalhes";
    link.appendChild(button);
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(link);
    cardapio.appendChild(div);
}

{/* <div class="produtos1">
                    <img id="foto-produto" src="img/sushi.jpg" alt="">
                    <h2>Sashimi</h2>
                    <p> Sashimi de salmão servido <br>ao molho teryaki e<br> acompanhado de legumes </p>
                    <a href="detalhes.html#sushi">
                        <button id="detalhes">Detalhes</button>
                    </a>
                </div> */}