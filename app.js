function nomesCaixaAlta() {
    var nome = document.getElementById('nome').value;
    var pai = document.getElementById('pai').value;
    var mae = document.getElementById('mae').value;
    console.log(nome.toUpperCase());
    console.log(pai.toUpperCase());
    console.log(mae.toUpperCase());
}






function circulo() {
var div = document.getElementById('questao2');
div.style.width = '100px';
div.style.height = '100px';
div.style.background = 'red';
div.style.borderRadius = '50%';


}

function quadrado() {
    var div = document.getElementById('questao2');
div.style.borderRadius = '1px';
div.style.width = '100px';
div.style.height = '100px';
div.style.background = 'blue';
}

function retangulo() {
var div = document.getElementById('questao2');
div.style.borderRadius = '0%'; 
div.style.width = '250px';
div.style.height = '150px';
div.style.background = 'pink';

} 


const carros = [
    {
      "marca": "",
      "modelo": "",
      "ano": "",
      "cor": "",
      "preco": 0
      
    }
    
  ]

  function pega(event) {
    let marca = event.marca.value;
    let modelo = event.modelo.value;
    let ano = event.ano.value;
    let cor = event.cor.value;
    let status = event.status.value;  
    let preco = event.preco.value;
  
    console.log(`Dados recebidos:
      Nome: ${marca}
      Email: ${modelo}
      Data: ${ano}
      Nome: ${cor}
      Status: ${status}
      Preco: ${preco}
    `);
  }


  function enviarNumero() {
    var numero = document.getElementById('numero').value;

    if((numero >= 0) && (numero < 10)){

        console.log( "Insuficiente");


            }
            
    else if((numero >= 10) && (numero < 14)){
    console.log(" Bom ");
    }
   
    else if((numero >= 14)){
    console.log(" Muito bom");
    }
    else{
    console.log('Valor Inválido');
    }         
    }


    function pesoAltura() {
        let peso = document.getElementById('peso').value;
        let altura = document.getElementById('altura').value;
        let soma   =  ( peso / (altura * altura));
        if(soma<=18.5) {
            console.log( "magreza");
                }
                else if((soma >18.5) && (soma <24.9)){
            console.log(" normal");
                }
                else if((soma >20.5) && (soma <29.5)){
                    console.log(" sobrepeso");

                    }
                     else if((soma >30.0) && (soma <39.9)){
                        console.log("Obesidade");
                    }
                    else if(soma >40) {
                    console.log(" obesidade grave");
                }
               else
                console.log('Verifique Valores');
                }      
                       
function julgamento(event) {


let telefonou = event.telefonou.value;
let esteve = event.esteve.value;
let mora = event.mora.value;
let devia = event.devia.value;
let trabalhou = event.trabalhou.value;
let soma = 0;


if (telefonou == 1) {
    soma++;
}
if (esteve == 1) {
    soma++;
}
if (mora == 1) {
    soma++;
}
if (devia == 1) {
    soma++;
}
if (trabalhou == 1) {
    soma++;
}



if (soma >= 0 && soma < 2) {
    document.getElementById("conclusao").innerHTML = "Classificação:  Inocente!";
}

else if (soma == 2) {
    document.getElementById("conclusao").innerHTML = "Classificação: Suspeito(a)!";
}

else if (soma > 2 && soma <= 4) {
    document.getElementById("conclusao").innerHTML = "Classificação: Cúmplice!";
}

else {
    document.getElementById("conclusao").innerHTML = "Classificação: Assassino!";
}







}