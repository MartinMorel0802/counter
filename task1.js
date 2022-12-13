// set inicial value
let count = 0;

//number and button

let number = document.querySelector('#number')
let btn = document.querySelectorAll(".btn")
let Manual = document.querySelector('#manual')


btn.forEach(function(btns){
    btns.addEventListener("click", function(e){
        const list = e.currentTarget.classList;
    if(list.contains("dec")){
        count--
    } else if( list.contains('inc')){
        count++
    } else if( list.contains('res')){
        count = 0
    } else if (list.contains('dec2')){
        count = count - 2
    }  else if (list.contains( "dec1")){
        count = count + 2 
    }
    
    number.textContent = count })
})