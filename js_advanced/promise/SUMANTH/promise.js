let result = false;

let myPromise = new Promise((resovle,reject) =>{
    if(result == true){
        resovle();
    }else{
        reject();
    }
})
myPromise.then(() =>{
    console.log("success")
},
() =>{
    console.log("failure")
})