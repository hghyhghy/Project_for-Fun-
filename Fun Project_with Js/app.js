
const rect = document.querySelector("#center")

rect.addEventListener("mousemove" ,function (details){
    const rectanglelocation = rect.getBoundingClientRect();

    const insiderect = details.clientX - rectanglelocation.left
    if (insiderect < rectanglelocation.width/2) {

        var redcolor = gsap.utils.mapRange(0,rectanglelocation.width/2,255,0,insiderect);

        gsap.to ("#center",{
            backgroundColor:`rgb(${redcolor},0,0)`,
            ease:"power4.out",
        });
        
    }
    else
    {
        var bluecolor = gsap.utils.mapRange(rectanglelocation.width/2,rectanglelocation.width,0,255,insiderect);

        gsap.to ("#center",{
            backgroundColor:`rgb(0,0,${bluecolor})`,
            ease:"power4.out",
        });
        

    }
    
});

rect.addEventListener("mouseleave", function() {
    gsap.to(rect,{
        backgroundColor:"white"
    })
})

