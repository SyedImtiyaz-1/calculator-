let string = "";
let buttons = document.querySelector('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        console.log(e.target)
        if (e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else{
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
    }
    })
})