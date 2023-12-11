// primera variable que pregunta al usuario si quiere empezar
let bienvenida = prompt(`¡Bienvenido al club FOREST 🌳  
¿Quieres ser fichado? (Responder con si/no)`).toLowerCase();

// En el caso de que ingrese "si" empieza a ficharlo.
if (bienvenida === "si") {
    let nombreYApellido = prompt("Ingrese su nombre y apellido");
    let edad = Number(prompt("Ingrese su edad"));
    let posicion = prompt("Ingrese su posición").toLowerCase();

    // Dependiendo de la edad ingresada, mostrará una alerta u otra.
    if (edad > 17) {
        alert(`¡JUGADOR FICHADO! 👏
        - Nombre: ${nombreYApellido}
        - Jugará en plantel superior.
        - Su posición es ${posicion}`);
    } else if (edad <= 17 && edad > 10) {
        alert(`¡JUGADOR FICHADO! 👏
        - Nombre: ${nombreYApellido}
        - Jugará en inferiores.
        - Su posición es ${posicion}`);
    } else if (edad <= 10) {
        alert(`¡JUGADOR FICHADO! 👏
        - Nombre: ${nombreYApellido}
        - Jugará en infantiles.
        - Su posición es ${posicion}`);
    } else {
        alert("Ocurrió un error. ⚠");
    }
} else {
    alert("No se pudo continuar con el fichaje. 😔");
}

// alerta de pago de cuotas
alert(`Recuerda que tienes que pagar la cuota. 💸💸💸
Su valor es de 30usd, puedes abonarlo en efectivo 💵 o con tarjeta.💳
Recordatorio: pagando con tarjeta tiene un 10% de recargo.`);

//Preguntamos al usuario como quiere pagar.
let pagarCuota = prompt(`Como quieres pagar la cuota?
Responder con: efectivo / tarjeta`).toLowerCase();

// funcion q hace el calculo del dinero ingresado menos el valor de la cuota
function calculoPagoEfectivo(a) {
    let resultado = a - 30
    alert(`Pago finalizado. ✅
    -Su vuelto es: ${resultado}usd`);
}

//Simulacion de pago con tarjeta
function pagoTarjeta(){
    let numTarjeta = Number(prompt("Ingrese el numero de tarjeta"));
    let numPin = Number(prompt("Ingrese su pin"));
    alert("Pago finalizado. ✅")
}

// dependiendo de como quiera pagar se ejecutara una funcion o otra.
if(pagarCuota === "efectivo") {
    let dineroPagar = Number(prompt("Con cuanto dinero va a pagar?"));
    calculoPagoEfectivo(dineroPagar);
}else if (pagarCuota === "tarjeta") {
    pagoTarjeta();
}else {
    alert("Ocurrió un error. ⚠")
}

// pide un numero y lo multiplica por i 10 veces.
alert("A continuacion podras donar dinero al club. 🙌")
let numero = Number(prompt("Ingrese el valor a donar."));

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    alert(numero + " X " + i + " = " + resultado);
    alert(`${numero} X ${i} = ${resultado}
quieres seguir donando? presione enter.`);
}
alert("Donacion finalizada. ✅")