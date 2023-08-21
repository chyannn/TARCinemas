
function responsiveIcon() {
    var x = document.getElementById("topnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


document.getElementById("signin-button").addEventListener("click", function() {
  window.location.href = "login.html";
});
