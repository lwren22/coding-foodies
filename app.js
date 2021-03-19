// window.onload = rotate;

// var thePic = 0;
// var pics = ["pics/cupcakes.png","pics/goulash.png","pics/eclair.png","pics/pizza.png"];


// document.getElementById("rightBtn").addEventListener("click", nextPic);
// document.getElementById("leftBtn").addEventListener("click", previousPic);


// function nextPic() 
// {
//     thePic++;
//     if (thePic == pics.length) {
//        thePic = 0;
//     }
//     document.getElementById("fourPics").src = pics[thePic]; 
//     }


// function previousPic() 
// {
//     thePic--;
//     if (thePic < 0) {
//         thePic = 3;  
//     } 
//     document.getElementById("fourPics").src = pics[thePic]; 
//         }

// function rotate() {
//     thePic++;
//     if (thePic == pics.length) {
//        thePic = 0;
//     }
//     document.getElementById("fourPics").src = pics[thePic]; 

//      setTimeout(rotate, 5 * 1000);
// }

let mainNav = document.getElementById("jsMenu");
let navBarToggle = document.getElementById("jsNavBarToggle");

navBarToggle.addEventListener("click", function () {
    
    mainNav.classList.toggle("active");
});


