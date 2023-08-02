let cuenta = 0;

document.getElementById("IncrementarBTN").onclick = function (){
    cuenta+= 1;
    console.log (cuenta);
    //Dios lo bendiga, ahora aparece en el log la cuenta, para tener un mejor control//
    document.getElementById("numeroInicial").innerHTML = cuenta;
    if (cuenta > 0){
       document.getElementById("numeroInicial").style.color = "Green" 
    }
}

document.getElementById("ResetBTN").onclick = function (){
    cuenta= 0;
    console.log (cuenta);
    document.getElementById("numeroInicial").innerHTML = cuenta;
    if (cuenta == 0){
        document.getElementById("numeroInicial").style.color = "black" 
     }
}

document.getElementById("ReducirBTN").onclick = function (){
    cuenta-= 1;
    console.log (cuenta);
    document.getElementById("numeroInicial").innerHTML = cuenta;
    if (cuenta < 0){
        document.getElementById("numeroInicial").style.color = "red" 
     }
}


