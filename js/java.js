var numero=prompt("Ingrese el numero para calcular el iva");
var elemento=document.querySelector(".numero1-numero").innerHTML=numero;

function calculadora_iva(){
if (numero>0){
    var iva= numero*0.21;
    var num_total=(parseFloat(numero)+parseFloat(iva));
    var elemento=document.querySelector(".numero2-numero").innerHTML=num_total.toFixed(4);
}
}
