
// let count = 0;

// function increase(){
//     document.getElementById("increase");addEventListener('click',(event)=>{
//         count++;
//         value.innerHTML = count;
//     });
// }
// function decrease(){
//     document.getElementById("decrease");addEventListener('click',(event)=>{
//         count--;
//         value.innerHTML =  count;
//     });
// }
// function reset(){
//     document.getElementById("reset");addEventListener('click',(event)=>{
//         count = 0;
//         value.innerHTML =  count;
//     });
// }

// ===============================================================================================================
 
let count = 0;
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click',(e)=>{
        const style = e.currentTarget.classList;
        if(style.contains('increase')){
            count++;
        }else if(style.contains('decrease')){
            count--;
        }
        else{
            count=0;
        }
        if(count > 0){
            value.style.color = 'green';
        }
        if(count < 0){
            value.style.color = 'red';
        }
        if(count === 0){
            value.style.color = 'yellow';
        }
        value.textContent = count;
    });
});