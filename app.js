const colors=['green','orange','rgba(133,122,200)','blue']
const btn=document.getElementById('btn')
const color=document.querySelector('.color')
btn.addEventListener('click',function(){
    //get random number between 0-3
    const randomNumber=random(0,colors.length-1);
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
})
function random(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}