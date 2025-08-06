setInterval(()=>{
    d=new Date();
    htime=d.getHours();
    stime=d.getSeconds();
    mtime=d.getMinutes();
    hrotation=30*htime+mtime/2;
mrotation=6*mtime;
srotation=6*stime;

min.style.transform=`rotate(${mrotation}deg)`;
second.style.transform=`rotate(${srotation}deg)`;
hour.style.transform=`rotate(${hrotation}deg)`;
},1000);