function myFirst(cb){
    cb(10);
    cb(20);
    cb(30);
    cb(40);
}
// myFirst(second);

// let second = () => {
//     console.log("HI....")
// }
// myFirst((second) => {
//     console.log("hiii" +"" +second)
// });

function First(some){
   some(10)
}

function second(second){
    console.log("WELCOME")

}
second();
First();
