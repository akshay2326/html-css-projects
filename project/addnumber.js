const button =document.querySelector('button');
    button.addEventListener('click',()=>{
//read data
const input1=document.getElementById('first');
const number1=Number(input1.value); 

const input2=document.getElementById('second');
const number2=Number(input2.value); 
//output

const result=number1+number2;
const re= document.getElementById('result');
re.textContent = `Result: ${result}`;


})
