let operandoa=0;
let operandob;
let operacion;


function init(){
    
    //DECLARACIÓN DE VARIABLES 
    let calculator = document.getElementById("calculator");
    let equal = document.getElementById("equal");
    let uno = document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres = document.getElementById("tres");
    let cuatro = document.getElementById("cuatro");
    let cinco = document.getElementById("cinco");
    let seis = document.getElementById("seis");
    let siete = document.getElementById("siete");
    let ocho = document.getElementById("ocho");
    let nueve = document.getElementById("nueve");
    let cero = document.getElementById("cero");
    let add = document.getElementById("add");
    let rest = document.getElementById("rest");
    let multiply = document.getElementById("multiply");
    let split = document.getElementById("split");
    let decimal = document.getElementById("decimal");
    let clear = document.getElementById("clear");
    
    //EVENTOS
    //BOTONER NUMEROS (0-9)
    uno.onclick = function (e){
        calculator.textContent = calculator.textContent + "1";
    }

    dos.onclick = function (e){
        calculator.textContent = calculator.textContent + "2";
    }

    tres.onclick = function (e){
        calculator.textContent = calculator.textContent + "3";
    }

    cuatro.onclick = function (e){
        calculator.textContent = calculator.textContent + "4";
    }

    cinco.onclick = function (e){
        calculator.textContent = calculator.textContent + "5";
    }

    seis.onclick = function (e){
        calculator.textContent = calculator.textContent + "6";
    }

    siete.onclick = function (e){
        calculator.textContent = calculator.textContent + "7";
    }

    ocho.onclick = function (e){
        calculator.textContent = calculator.textContent + "8";
    }

    nueve.onclick = function (e){
        calculator.textContent = calculator.textContent + "9";
    }

    cero.onclick = function (e){
        calculator.textContent = calculator.textContent + "0";
    }

    decimal.onclick = function (e){
        calculator.textContent = calculator.textContent + ".";
    }

    //BOTONES DE SUMA - RESTA - MULTIPLICACIÓN - DIVISIÓN
    clear.onclick = function (e){
        resetear();
    }

    add.onclick = function (e){
        operandoa += parseFloat(calculator.textContent);
        operacion = "+";
        limpiar();
    }
    
    rest.onclick = function (e){
        operandoa += parseFloat(calculator.textContent);
        operacion = "-";
        limpiar();
    }

    multiply.onclick = function (e){
        if (operandoa===0){
            operandoa=parseFloat(calculator.textContent);
        }
        else{
            operandoa = operandoa * parseFloat(calculator.textContent);
        }
        operacion = "*";
        limpiar();
    }

    split.onclick = function (e){
        if (operandoa===0){
            operandoa=parseFloat(calculator.textContent);
        }
        else{
            operandoa = operandoa / parseFloat(calculator.textContent);
        }
        operacion = "/";
        limpiar();    
    }

    equal.onclick = function (e){
        operandob = calculator.textContent;
        resolver();
    }
}

//FUNCIÓN PARA LIMPIAR 
function limpiar(){
    calculator.textContent = "";
}

//FUNCIÓN DE RESETEAR
function resetear(){
    calculator.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}

//FUNCIÓN PARA RESOLVER OPERACIONES
function resolver(){
    let resultado = 0;
    switch(operacion){
        case "+":
            console.log(operandoa);
            resultado = parseFloat(operandoa) + parseFloat(operandob);        
            break;
        case "-":
            resultado=parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            resultado=parseFloat(operandoa) * parseFloat(operandob);
            break;
        case "/":
            resultado=parseFloat(operandoa) / parseFloat(operandob);
            break;
    }
    resetear();
    calculator.textContent = resultado;
}

