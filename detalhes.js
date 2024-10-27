const telaCarregamento = document.getElementById('telaCarregamento');
const pegarUrl = new URLSearchParams(window.location.search);
const id = pegarUrl.get('produtoId');
const main = document.getElementById('main');

const pegarProduto = async () => {
    telaCarregamento.style.display = 'flex';
    const promise = await fetch(`https://tech4japa.fly.dev/produtos/${id}`);
    const response = await promise.json();
    telaCarregamento.style.display = 'none';
    mostrarCard(response);
}

pegarProduto();

const mostrarCard = (produto) => {
    const divCard = document.createElement('div');
    divCard.className = 'produtos1';

    const img = document.createElement('img');
    img.src = `${produto.imagem}`;

    const divDados = document.createElement('div');
    divDados.className = 'textos';

    const h1 = document.createElement('h1');
    h1.innerText = `${produto.produto}`;

    const divParagrafos = document.createElement('div');
    divParagrafos.className = 'paragrafos';

    const pDescricao = document.createElement('p');
    pDescricao.className = 'descricao';
    pDescricao.innerText = `${produto.descricao}`;

    const form = document.createElement('form');

    const pPromocao = document.createElement('p');
    pPromocao.innerText = 'Receber Promoções';

    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'email';
    input.placeholder = 'Seu e-mail';

    const divCheckbox = document.createElement('div');
    divCheckbox.className = 'divCheckbox';
    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    inputCheckbox.id = 'checkbox';
    const label = document.createElement('label');
    label.id = 'label';
    label.innerHTML = 'Aceito os <a href="#" id="a">Termos de Uso</a>';

    const buttonSubmit = document.createElement('button');
    buttonSubmit.type = 'submit';
    buttonSubmit.innerText = 'Receber Promoções';

    const buttonComprar = document.createElement('button');
    buttonComprar.id = 'botao-compra';
    buttonComprar.innerText = 'Comprar';

    const pErro = document.createElement('p');
    pErro.className = 'erro';
    pErro.innerText = 'Você precisa concordar com os Termos de Uso';
    pErro.id = 'erro';

    divCard.appendChild(img);
    divDados.appendChild(h1);
    divParagrafos.appendChild(pDescricao);
    divDados.appendChild(divParagrafos);
    form.appendChild(pPromocao);
    form.appendChild(input);
    divCheckbox.appendChild(inputCheckbox);
    divCheckbox.appendChild(label);
    form.appendChild(divCheckbox);
    form.appendChild(pErro);
    form.appendChild(buttonSubmit);
    divDados.appendChild(form);
    divDados.appendChild(buttonComprar);
    divCard.appendChild(divDados);

    main.appendChild(divCard);

    form.addEventListener('submit', (evento) => {
        evento.preventDefault();
        verificarForm(input.id, checkbox.id);
    })
}








{/* <div class="produtos3" id="brownie">
                    <img id="foto-produto" src="img/brownie.jpeg" alt="">
                    <div class="textos">
                        <div class="compra">
                            <h2 id="h2-maior">Brownie</h2>
                    <p>Brownie com sorvete <br> e calda de chocolate</p>
                    <button id="botao-compra">Comprar</button>
                        </div>
                    <form action="">
                        <p id="menor">Registre-se para receber promoçoes</p>
                        <input id="email" type="email" placeholder="email">
                        <div class="termos">
                            <input id="box" type="checkbox">
                        <label for="box">Li e aceito os termos de uso</label>
                        </div>
                        <button id="cadastrar" onclick="alert('Email cadastrado com sucesso!')">Cadastrar</button>
                    </form>
                    </div>
                </div> */}