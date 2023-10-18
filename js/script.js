let textbox = document.querySelector(".textbox")
let numberbox = document.querySelector(".numberbox")
let btn = document.querySelector(".btn")
let copybtn = document.querySelector(".copy")
let overlay = document.querySelector(".overlay")
let error = document.querySelector(".error")
let text_wrapper = document.querySelector(".text_wrapper")
let arr = []


copybtn.style.display = "none"
overlay.style.display = "none"


btn.addEventListener("click",function(){
    if(!textbox.value || !numberbox.value){
        error.innerHTML = "Please enter your text and repetation number."
    }else{
        error.innerHTML = ""
        copybtn.style.display = "block"
        for(let i = 0; i < numberbox.value; i++){
            arr.push(textbox.value)
        }
        text_wrapper.innerHTML = arr.join(" ")
        textbox.value = ""
        numberbox.value = ""
    }
})

copybtn.addEventListener("click",function(){
    overlay.style.display = "block";
    overlay.style.top = "0";

    let selectedtext = text_wrapper.textContent;
    const tempInput = document.createElement("textarea");
    tempInput.value = selectedtext;
    document.body.appendChild(tempInput);
    tempInput.select()
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    setTimeout(function () {
        overlay.style.display = "none";
        overlay.style.top = "100px";
      }, 2500);

});












