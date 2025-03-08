function jugar() {
    let numero1 = prompt("Ingrese un número");
    numero1 = Number(numero1);
    while (isNaN(numero1)) {
        numero1 = prompt("Por favor, ingrese un número real");
        numero1 = Number(numero1);
    }
    console.log("Número 1: " + numero1);

    let numero2 = prompt("Ingrese un segundo número");
    numero2 = Number(numero2);
    while (isNaN(numero2)) {
        numero2 = prompt("Nuevamente, por favor, ingrese un número real");
        numero2 = Number(numero2);
    }
    console.log("Número 2: " + numero2);

    let numero3 = prompt("Ingrese un tercer número");
    numero3 = Number(numero3);
    while (isNaN(numero3)) {
        numero3 = prompt("Solo uno más, por favor, hagámoslo bien");
        numero3 = Number(numero3);
    }
    console.log("Número 3: " + numero3);

    orden(numero1, numero2, numero3);
    sonIguales(numero1, numero2, numero3);
}

function orden(numero1, numero2, numero3) {
    let numeroMayor = Math.max(numero1, numero2, numero3);
    let numeroMenor = Math.min(numero1, numero2, numero3);
    let numeroMedio = (numero1 !== numeroMayor && numero1 !== numeroMenor) ? numero1 :
        (numero2 !== numeroMayor && numero2 !== numeroMenor) ? numero2 :
        numero3;

    console.log(`${numeroMayor}, ${numeroMedio}, ${numeroMenor}`);
    console.log(`${numeroMenor}, ${numeroMedio}, ${numeroMayor}`);

    visualizarEnDom(numeroMayor, numeroMedio, numeroMenor);
}

function sonIguales(numero1, numero2, numero3) {
    let mensaje;
    if (numero1 === numero2 && numero2 === numero3) {
        mensaje = "¡Todos los números son iguales!";
    } else {
        mensaje = "Los números fueron diferentes";
    }

    console.log(mensaje);
    return mensaje;
}

function visualizarEnDom(num1, num2, num3) {
    const parrafo1 = document.createElement("p");
    parrafo1.textContent = "Números del mayor al menor: ";
    document.body.append(parrafo1);

    document.body.append(document.createElement("ul"));

    const mayor1 = document.createElement("li");
    mayor1.textContent = num1;
    document.body.append(mayor1);

    const medio1 = document.createElement("li");
    medio1.textContent = num2;
    document.body.append(medio1);

    const menor1 = document.createElement("li");
    menor1.textContent = num3;
    document.body.append(menor1);

    const parrafo2 = document.createElement("p");
    parrafo2.textContent = "Números del menor al mayor: ";
    document.body.append(parrafo2);

    document.body.append(document.createElement("ul"));

    const menor2 = document.createElement("li");
    menor2.textContent = num3;
    document.body.append(menor2);

    const medio2 = document.createElement("li");
    medio2.textContent = num2;
    document.body.append(medio2);

    const mayor2 = document.createElement("li");
    mayor2.textContent = num1;
    document.body.append(mayor2);

    const parrafo3 = document.createElement("p");
    parrafo3.textContent = sonIguales(num1, num2, num3);
    document.body.append(parrafo3);
}
