
 var cursor =document.querySelector("#cursor");
 var dblur =document.querySelector("#dblur");

document.addEventListener("mousemove",function(dets){

 cursor.style.left = dets.x+"px"
  cursor.style.top = dets.y+"px"

dblur.style.left =dets.x-150+"px"
    dblur.style.top =dets.y-150+"px"

})






gsap.to("#nav",{
    backgroundColor:"transparent",

    duration:0.5,
    height:"70px",
scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
    // markers:true,
start:"top -10%",
end:"top -11%",
scrub:6,
}
})
gsap.to(".section",{
    backgroundColor:"black",
    width:"100%",
    scrollTrigger:{
        trigger:"#section",
        scroller:"body",
        // markers:true,
        start:"10vh",
        end:"100vw",
        scrub:3,
    }
})

