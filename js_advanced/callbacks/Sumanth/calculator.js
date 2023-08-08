function calculator(num1,num2,op,cb){
    switch (op) {
        case "+":
        cb(num1,num2)
            
            break;
        case "-":
        cb(num1,num2)
            
            break;
        case "*":
        cb(num1,num2)
            
            break;
        case "/":
        cb(num1,num2)
            
            break;
    
        default:
            break;
    }
}

function add(num1,num2){
    console.log(num1+num2)
}

function subtract(num1,num2){
    console.log(num1-num2);
}

function multiply(num1,num2){
    console.log(num1 * num2);
}

function divide(num1,num2){
    console.log(num1/num2)
}
calculator(5,6,"+",add)
calculator(10,20,"+",add)
calculator(25,16,"-",subtract)
calculator(5,4,"*",multiply)
calculator(20,5,"/",divide)