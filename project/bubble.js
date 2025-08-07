document.body.addEventListener("click",(event)=>{
    const circle=document.createElement('div');
    circle.className='circle';
    circle.textContent="hi";
    //loaction pta kre  click mouse ke
    const x=event.clientX;
    const y=event.clientY;
    //25 lika center krne k leya
    circle.style.left=`${x-25}px`;
    circle.style.top=`${y-25}px`;
    const color=["red","blue","green","purple","white","yellow","wheat"];
    circle.style.backgroundColor=color[Math.floor(Math.random()*color.length)];
    document.body.appendChild(circle);
    setTimeout(()=>{
        circle.remove();
    
    },5000)

})