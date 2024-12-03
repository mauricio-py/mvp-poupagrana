// Obter elementos dos botões  
const botaoLogin = document.getElementById('botaoLoginConteudoPrincipal');  
const botaoCadastre = document.getElementById('botaoCadastreConteudoPrincipal');  

// Adicionar eventos de clique  
botaoLogin.addEventListener('click', function() {  
    alert('Botão de Login clicado!');  
});  

botaoCadastre.addEventListener('click', function() {  
    alert('Botão de Cadastre-se clicado!');  
});  

// Efeito de hover usando classes  
botaoLogin.addEventListener('mouseover', function() {  
    botaoLogin.classList.add('button-hover');  
});  

botaoLogin.addEventListener('mouseout', function() {  
    botaoLogin.classList.remove('button-hover');  
});  

botaoCadastre.addEventListener('mouseover', function() {  
    botaoCadastre.classList.add('button-hover');  
});  

botaoCadastre.addEventListener('mouseout', function() {  
    botaoCadastre.classList.remove('button-hover');  
});