function calculator(num1,num2,Callback){
    let sum = num1 + num2;
    Callback(sum);
}
function display(value){
    console.log(value);
}
calculator(3,5,display)