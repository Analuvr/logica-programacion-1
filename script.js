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
    let numeros = [numero1, numero2, numero3];
    numeros.sort((a, b) => a - b); // Ordenar los números en orden ascendente

    let numeroMenor = numeros[0];
    let numeroMedio = numeros[1];
    let numeroMayor = numeros[2];

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

    let ul = document.createElement("ul");
    document.body.append(ul);

    const mayor = document.createElement("li");
    mayor.textContent = num1;
    ul.append(mayor);

    const medio = document.createElement("li");
    medio.textContent = num2;
    ul.append(medio);

    const menor = document.createElement("li");
    menor.textContent = num3;
    ul.append(menor);

    const parrafo2 = document.createElement("p");
    parrafo2.textContent = "Números del menor al mayor: ";
    document.body.append(parrafo2);

    let ul2 = document.createElement("ul");
    document.body.append(ul2);

    const menor2 = document.createElement("li");
    menor2.textContent = num3;
    ul2.append(menor2);

    const medio2 = document.createElement("li");
    medio2.textContent = num2;
    ul2.append(medio2);

    const mayor2 = document.createElement("li");
    mayor2.textContent = num1;
    ul2.append(mayor2);

    const parrafo3 = document.createElement("p");
    parrafo3.textContent = sonIguales(num1, num2, num3);
    document.body.append(parrafo3);
}
