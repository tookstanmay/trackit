let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let code = "";

for (let i = 0; i < 4; i++){
    let randomNumber = Math.round(Math.random() * alphabets.length);
    code += alphabets[randomNumber];
}
// console.log(code);

let proxy = false;

// function logSubmit(event){
//     proxy = false;
//     event.preventDefault();
// }

// let form = document.querySelector("form");
// form.addEventListener("submit", logSubmit);

function checkProxy(){
    document.addEventListener("visibilitychange", function (){
        proxy = true;
    });
}

setInterval(function returnValue(){
    if (proxy === true){
        document.title = "FUCK YOU!";
    }
    checkProxy();
}, 10);