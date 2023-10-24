(function(){

    "use strict";

    const myPhotos = ["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg"];
    const container = document.getElementById("content"); 
    const nxtBtn = document.getElementById("next");
    const prvBtn = document.getElementById("previous");
    let currImg = 0;
    const intervalId =  setInterval(autoSlideshow,3000); 
    autoSlideshow();

    nxtBtn.addEventListener("click", function(event){
        event.preventDefault();

        currImg++;
        if(currImg > myPhotos.length-1){ 
            currImg=0;
        }
            swapImg();
        });

        prvBtn.addEventListener("click", function(event){
        event.preventDefault();

        currImg--;
        if(currImg < 0){ 
            currImg=myPhotos.length-1;
        }             
            swapImg();
        });

        function swapImg(){
            const newSlide = document.createElement("img");

            newSlide.src=`slides/${myPhotos[currImg]}`;
            newSlide.className = "fadeinimg";
            container.appendChild(newSlide);

            if(container.children.length > 2){
                container.removeChild(container.children[0]);
            }
        }

        function autoSlideshow(){
            if(currImg < myPhotos.length-1){
                currImg++;
            }
            else{
                currImg=0;
            }
            swapImg();
        }
})();