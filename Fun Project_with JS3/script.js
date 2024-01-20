 
        const throttleFunction = (func, delay) => {
 
            let prev = 0;
            return (...args) => {
                let now = new Date().getTime();
 
                   if (now - prev > delay) {
                    prev = now;
 
                    return func(...args);
                }
            }
        }
        document.querySelector("#center").addEventListener("mousemove",
            throttleFunction((dets) => {

        var div = document.createElement("div")

        var image = document.createElement("img")
        
        div.classList.add("imagediv")
        div.style.left= dets.clientX+"px",
        div.style.top= dets.clientY+"px",
        image.setAttribute("src", "ship-8489583.jpg")

        div.appendChild(image)
        
        document.body.appendChild(div)

        gsap.to ( image ,  {
            y:"0",
            ease:"power1",
            duration: 0.6
        })

         
        gsap.to ( image ,  {
            y:"100",
            delay:0.6,
            ease:"power2",
        })

        setTimeout(() => {
            div.remove()
        }, 2000);



            }, 400));