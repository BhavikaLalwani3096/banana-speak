var btntranslate = document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-input");

console.log(btntranslate);
console.log(txtinput);

btntranslate.addEventListener(
    "click",function clickEventHandler(){
        console.log("clicked");
        console.log(txtinput.value)
    }
)