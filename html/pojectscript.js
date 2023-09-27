var crsr= document.querySelector("#cursor");
var crsr_b= document.querySelector("#cursor_blur");
document.addEventListener('mousemove',(e)=>{
crsr.style.left=e.x-12.5+"px";
crsr.style.top=e.y-12.5+"px";
crsr_b.style.left=e.x-100+"px";
crsr_b.style.top=e.y-100+"px";
});

var onElement=document.querySelectorAll("h5,h6, #nav img,#nav h4,#cardContainer div, .boxes");
onElement.forEach((e)=>{
    e.addEventListener('mouseenter',()=>{
        crsr.style.scale=2.5;
        crsr.style.border="1px solid white";
        crsr.style.backgroundColor='transparent';
        crsr.style.transition="all 0.2s ease";
    })
})
onElement.forEach((e)=>{
    e.addEventListener('mouseleave',()=>{
        crsr.style.scale=1;
        crsr.style.border="none";
        crsr.style.backgroundColor='red';
        crsr.style.transition="all 0.2s ease";
})
})




gsap.to("#nav",{
     backgroundColor:"black",
     height:"100px",
     duration:0.5,
     scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"-11%",
        // scrub:true or 1-5
        scrub:1
     }
});

        gsap.to("#main",{
            backgroundColor:"black",
            color:"red",
            scrollTrigger:{
                trigger:"#main",
                scroller:"body",
                // markers:true,
                start:"top -60%",
                end:"top -80%",
                scrub:5
            }
        })

gsap.from("#aboutUs img,#details",{
    y:100,
    opacity:0,
    duration:1,
    stagger:1,
    scrollTrigger:{
        trigger:"#aboutUs",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 40%",
        scrub:2
    }
})
