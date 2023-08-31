const closing=()=>{
const close_btn=document.getElementById("menu-holder");
close_btn.style.left="-40rem";
console.log("working");

}
const opening=()=>{
    const close_btn=document.getElementById("menu-holder");
    close_btn.style.left="0rem";
    console.log("working");
    
    }


const close_btn=document.getElementById("cross");
close_btn.addEventListener('click',closing)

const open_hamburgermenu=document.getElementById("menu-toggle")
open_hamburgermenu.addEventListener('click',opening);



var tl =gsap.timeline();
tl.from("#heading,#description",{
    y:100,
    duration:1,
    delay:0.5,
    opacity:0,
})
tl.from("#logo,#login",{
    duration:1,
    delay:0.5,
    opacity:0,
    })

gsap.from("#box",{
    y:200,
    // opacity:0,
    duration:1,
    scrollTrigger:"#box",
})