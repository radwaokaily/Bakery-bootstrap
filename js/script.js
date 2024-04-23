let nav=document.getElementById('navbar');
window.addEventListener('scroll',()=>{
    if(window.scrollY>739){
    nav.style.backgroundColor="#A9652D"
}
else {
    nav.style.background="transparent";
    nav.style.transition='.4s'
}
})

// console.log(window.scrollY)