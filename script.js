const btn = document.querySelector('.btn');
const resposta = document.querySelector('.resposta');
const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$*_";
btn.addEventListener('click',()=>{
    num = document.getElementById('inputNumber').value;
   gerarSenha();
   
   
   }
   );


function gerarSenha() {
    
    var senha = "";
    for (var i = 0; i < num; i++) {
        
        var caractereAleatorio = caracteres.charAt(Math.random() * caracteres.length);
    
        senha += caractereAleatorio;
    }
    resposta.textContent = 'Senha gerada: ' + senha;

};





