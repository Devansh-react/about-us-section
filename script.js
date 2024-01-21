var tl=gsap.timeline({scrollTrigger:{
    trigger:".main",
    start:"50% 50%",
    end:"100% 50%",
    scrub:2,
    pin:true

}});
tl.to(".top",{
    top:"-50%"
},'a')
.to(".bottom",{
    bottom:"-50%"
},'a')
.to(".top-h",{
    top:" 80%"
})
.to(".bottom-h",{
    bottom:" -80%"
})
.to(".info",{
    delay: -0.2,
    marginTop: "0%"
 })
 var top=document.querySelector('.top','.bottom')
 var info=document.querySelector('.info')

var cursor=document.querySelector('.cursor')
var main=document.querySelector('.main')
main.addEventListener("mousemove", (dets)=>{
    cursor.style.left=dets.x+"px"
    cursor.style.top=dets.y+"px"

})



