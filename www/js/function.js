
var numero;
var tentativas = 0;
var tentativasMax = 10;


function onDeviceReady() {
   navigator.vibrate(2000);
}

var sortear = document.querySelector("#sortear");
sortear.addEventListener("click", function(e){
	numero = Math.floor(Math.random() * 11);
	alert("O número foi sorteado!")
	tentativas = 0;

	document.querySelector("#recebe").disabled = false;
    document.querySelector("#check").disabled = false;
    document.querySelector("#desisto").disabled = false;
})

var check = document.querySelector("#check");
check.addEventListener("click", function(e){
	var recebeValor = document.querySelector("#recebe");
	var valor = recebeValor.value;
	var msg;

	if(valor < numero){
		msg = "É menor que o sorteado!";
	} else if(valor > numero){
		msg = "É maior que o sorteado!";
	} else if(valor == numero){
		msg = "Parabéns, você acertou!";
		document.querySelector("#recebe").disabled = true;
		document.querySelector("#check").disabled = true;
		document.querySelector("#desisto").disabled = true;
		onDeviceReady();
	}

	var pValor = document.createElement("p");
	pValor.textContent = valor + " " + msg;
 	document.querySelector("#divValor").appendChild(pValor);

	tentativas ++;
	if(tentativas >= tentativasMax){
		document.querySelector("#recebe").disabled = true;
		document.querySelector("#check").disabled = true;
		alert("Suas chances terminaram!");
		var p = document.createElement("p");
		p.textContent = "O número sorteado foi:" + " " + numero;
 		document.querySelector("#divValor").appendChild(p);
	}

	recebeValor.value = " ";
})

var desisto = document.querySelector("#desisto");
desisto.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector("#desisto").disabled = true;
  	document.querySelector("#check").disabled = true;
	var p = document.createElement("p");
	p.textContent = "O número sorteado foi:" + " " + numero;
 	document.querySelector("#divValor").appendChild(p);
 })

var limpar = document.querySelector("#limpar");
limpar.addEventListener("click", function(e){
    document.querySelector("#recebe").disabled = false;
    document.querySelector("#check").disabled = false;
    document.querySelector("#desisto").disabled = false;
    document.querySelector("#divValor").innerHTML= " ";
    document.querySelector("#recebe").value = " ";

})