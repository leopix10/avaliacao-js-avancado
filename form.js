const verificarForm = (email, checkbox) => {
    const inputEmail = document.getElementById(`${email}`);
    const inputCheckbox = document.getElementById(`${checkbox}`);
    const pErro = document.getElementById('erro');
    const label = document.getElementById('label');
    const link = document.getElementById('a');
    pErro.style.display = 'none';
    label.style.color = 'white';
    link.style.color = 'white';
    label.style.fontWeight = '400';
    link.style.fontWeight = '400';

    if(inputEmail.value == ''){
        promptEmail();
    } else if(inputEmail.value.length >= 10 && verificarEmail() == true && inputCheckbox.checked){
        alert(`O e-mail "${inputEmail.value}" foi cadastrado com sucesso!`);
        inputEmail.value = '';
    } else if(inputEmail.value.length < 10 && verificarEmail() == false){
        alert(`E-mail inválido!`);
    } else if(verificarEmail() == true && inputEmail.value.length < 10){
        alert(`O e-mail precisa ter no mínimo 10 caracteres!`)
    } else if(inputEmail.value.length >= 10 && verificarEmail() == false){
        alert(`O e-mail precisa ter um @ e pelo menos um ' . ' !`)
    } else if(inputEmail.value.length >= 10 && verificarEmail() == true && !inputCheckbox.checked){
        erroCheckbox();
    }
}

const promptEmail = () => {
    const email = prompt('Preencha com seu e-mail:');
    const checkbox = document.getElementById('checkbox');

    if(email == ''){
        alert(`E-mail inválido!`);
    } else if(email.length >= 10 && email.includes('@') && email.includes('.') && checkbox.checked){
        alert(`O e-mail "${email}" foi cadastrado com sucesso!`);
    } else if(email.length < 10 && !email.includes('@') && !email.includes('.')){
        alert(`E-mail inválido!`);
    } else if(email.includes('@') && email.includes('.') && email.length < 10){
        alert(`O e-mail precisa ter no mínimo 10 caracteres!`);
    } else if(email.length >= 10 && !email.includes('@') && !email.includes('.')){
        alert(`O e-mail precisa ter um @ e pelo menos um ' . ' !`);
    } else if(email.length >= 10 && email.includes('@') && email.includes('.') && !checkbox.checked){
        erroCheckbox();
    }
}

const erroCheckbox = () => {
    const label = document.getElementById('label');
    const pErro = document.getElementById('erro');
    const link = document.getElementById('a');
    pErro.style.display = 'flex';
    label.style.color = 'red';
    link.style.color = 'red';
    label.style.fontWeight = '600';
    link.style.fontWeight = '600';
}

const verificarEmail = () => {
    const email = document.getElementById('email');
    if(email.value.includes('@') && email.value.includes('.')){
        return true;
    } else{
        return false;
    }
}