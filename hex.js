// // var str={
// //     i:3,
// //     j:4
// // }
// str=9
// str+='2';
// console.log(str)
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
const btn=document.getElementById('btn')
const color=document.querySelector('.color')
btn.addEventListener('click',function(){
    let hexcolor='#'
    for(let i=0;i<6;++i){
        hexcolor+=hex[random(0,hex.length-1)]
    }
    document.body.style.backgroundColor=hexcolor;
    color.textContent=hexcolor
})
function random(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
