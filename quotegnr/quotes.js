const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "Believe you can, and you're halfway there. - Theodore Roosevelt",
    "Dream big and dare to fail. - Norman Vaughan",
    "Act as if what you do makes a difference. It does. - William James",
    "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
    "Do what you can, with what you have, where you are. - Theodore Roosevelt",
    "Hardships often prepare ordinary people for an extraordinary destiny. - C.S. Lewis",
    "Success is not in what you have, but who you are. - Bo Bennett",
    "The best way to predict the future is to create it. - Peter Drucker",
    "The secret of getting ahead is getting started. - Mark Twain",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
    "Your time is limited, don’t waste it living someone else’s life. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Don't be afraid to give up the good to go for the great. - John D. Rockefeller"
  ];
function generatequote(){

}

setInterval(generatequote,5000);

setInterval(generatequote,5000);
const button=document.querySelector('button');
button.addEventListener('keydown',()=>{
 console.log(event.key);
 console.log(event.type);
 //clientx mouse location 
 //clienty upar se kitne portion p click kiya
 console.log(event.clientx);
//if(event.key===enter){}
  const index=Math.floor(Math.random()*quotes.length );
  const text=document.getElementById("quote1");
 text.textContent=quotes[index];
})


//keydown when presss
//keyup when release