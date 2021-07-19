function setUp() {
    var form = document.forms.Form;
    var bar = document.getElementById("subscribe");
    var photo = document.getElementById("snazzy-girl");
    var error = document.getElementById("error-message");
    var button = document.getElementById("submit-button");

    function Tamers() {
        location.assign("index.html");
    }


    if (document.body.clientWidth >= 1050) {
        photo.removeAttribute("src");
        photo.setAttribute("src", "images/hero-desktop.jpg")
    }


    form.onsubmit = function(mace) {
        mace.preventDefault();
        if (form.email.value == "") {
            bar.style.borderColor = "hsl(0, 93%, 68%)";
            error.innerHTML = "<img src=\"images/icon-error.svg\" alt=\"error-indicator\" id=\"error\"/> <p class=\"bistro-king\"> Please provide an email </p>";
        }

        else {
            error.innerText = "";
            addEventListener("submit",  setTimeout(Tamers, 1000), true);
        }
    }


    form.onsubmit(submit);

}


window.onload = function() {
    setUp();
}