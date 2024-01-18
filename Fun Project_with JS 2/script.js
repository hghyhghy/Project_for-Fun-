
window.addEventListener("mousemove", function(details) {

  var rect = document.querySelector("#rect")  
  
  var xvalue =  gsap.utils.mapRange(0,window.innerWidth,100 + rect.getBoundingClientRect().width/2,window.innerWidth-(100+rect.getBoundingClientRect().width/2),details.clientX);
    
    
    
    // using gsap
    gsap.to( "#rect", {
        left:xvalue+"px",
        ease:"power4.out"
    })
})