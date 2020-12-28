let  btns = document.querySelectorAll('.btn');
let input = document.getElementById('input');
let output = document.getElementById('output');
let equal=document.querySelector(".equal")

btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        btnText = e.target.innerText;
        input.value += btnText;
        if(btnText == 'X'){
            btnText = '*';
        }
        else if(btnText == 'C'){
            input.value = '';
            output.innerText = '0'
        }
    })
})
equal.onclick=()=>{
    output.innerText=eval(input.value)
}