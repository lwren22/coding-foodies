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

var modal = document.getElementById("modalBox");

// Get the button that opens the modal
var left = document.getElementsByClassName("subFav");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
document.getElementById("left").addEventListener("mouseover", function(event) {
    document.getElementById("left").color = "red";
    console.log("event", event.target);
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  	modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};