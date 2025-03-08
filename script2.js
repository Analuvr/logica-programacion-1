function jugar () {
    let numero1 = prompt("Ingrese un número");
    if (Number(numero1)) {
        console.log("Número 1: " + numero1);
    } else {
        numero1 = prompt("Por favor, ingrese un número real");
        while(!(Number(numero1)))
        numero1 = prompt("Dije: un número real");
    }

    let numero2 = prompt("Ingrese un segundo número");
    if (Number(numero2)) {
        console.log("Número 2: " + numero2);
    } else {
        numero2 = prompt("Nuevamente, por favor, ingrese un número real");
        while(!(Number(numero2)))
        numero2 = prompt("Cooperemos y coloquemos un número real");
    }

    let numero3 = prompt("Ingrese un tercer número");
    if (Number(numero3)) {
        console.log("Número 3: " + numero3);
    } else {
        numero3 = prompt("Solo uno más, por favor, hagámoslo bien");
        while(!(Number(numero3)))
        numero3 = prompt("Número real, si es tan amable");
        }
    return [numero1, numero2, numero3];
}

// Pasados 3 números, devuelve el mayor, el menor y el de en medio
function orden(){
    let array = jugar();
    let numeroMayor = Math.max(array[0], array[1], array[2]);
    let numeroMenor = Math.min(array);
    let numeroMedio = array.shift[numeroMayor, numeroMenor];

    console.log(`${numeroMayor}, ${numeroMedio}, ${numeroMenor}`);
    console.log(`${numeroMenor}, ${numeroMedio}, ${numeroMayor}`);
    
    visualizarEnDom(numeroMayor, numeroMedio, numeroMenor)
}

function sonIguales(numero1, numero2, numero3) {
    let relacionNums;
    if(numero1 == numero2){
        if(numero2 == numero3) {
            relacionNums = "¡Todos los números son iguales!";
            console.log("¡Todos los números son iguales!")
        } else {
            relacionNums = "Los números fueron diferentes";
            console.log("Los números fueron diferentes");
        }
    } else {
        relacionNums = "Los números fueron diferentes";
        console.log("Los números fueron diferentes");
    }

    return relacionNums;
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
    document.body.append(medio1)

    const menor1 = document.createElement("li");
    menor1.textContent = num3;
    document.body.append(menor1)

    const parrafo2 = document.createElement("p");
    parrafo2.textContent = "Números del menor al mayor: ";
    document.body.append(parrafo2);

    document.body.append(document.createElement("ul"));

    const menor2 = document.createElement("li");
    menor2.textContent = num3;
    document.body.append(menor2);

    const medio2 = document.createElement("li");
    medio2.textContent = num2;
    document.body.append(medio2)

    const mayor2 = document.createElement("li");
    mayor2.textContent = num1;
    document.body.append(mayor2)

    const parrafo3 = document.createElement("p");
    parrafo3.textContent = sonIguales();
    document.body.append(parrafo3);
}