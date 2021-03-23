let mainNav = document.getElementById("jsMenu");
let navBarToggle = document.getElementById("jsNavBarToggle");

navBarToggle.addEventListener("click", function () {
    
    mainNav.classList.toggle("active");
});

/* var newsletter 
    prompt("Enter your email address here!");
    returnprompt("Thank you!"); */

    function promptMe(){
        var userEmail = prompt("Enter your email address here!");
        alert ("Thank you!");
    }
