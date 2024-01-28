// // -----------gsap--------------
// gsap.to(".scroller",{
//     display:"block",
//     color:"blue",
//     backgroundColor:"red",
//     fontSize:"32px",
//     stagger:0.4,
//     // duration:1,
//     scrollTrigger:{
//         trigger:'.scroller',
//         scroller:"body",
//         markers:true,
//         start:"top -40%" ,
//         end:'top -41%',
//         scrub:2
//     }
// })



const signIn = document.querySelector('#signIn')
const signUp = document.querySelector('#signUp')
// const container=document.querySelector(".container")

// signInLink.addEventListener('click',()=>{
//     // container.classList.toggle('active')
//     signIn.style.top='20px'
//     signUn.style.top='-400px'
// })
// signUpLink.addEventListener('click',()=>{
//     // container.classList.toggle('active')
//     signIn.style.top='-400px'
//     signUp.style.top='20px'
// })

function signUpf(){
    signIn.style.top="-500px"
    signUp.style.top="0px"
}
function signInf(){
    signIn.style.top="30px"
    signUp.style.top="450px"
}
