function changeNav(loggedin) {
    topnav = document.querySelector("#topnav");
    topnav.innerHTML = '';
    sidenav = document.querySelector("#sidenav");
    sidenav.innerHTML = '';
    if (loggedin) {
        topnav.innerHTML = (
            `<ul>
            <li class="logo_bg"><a href="index.html" class="logo_header" class="active"><span>TAR</span>Cinemas&#174</a></li>
            <ul style="float:right;">
                <li><a href="html/movies.html">Movies</a></li>
                <li><a href="html/promotions.html">Promotions</a></li>
                <li><a href="html/cinemas.html">Cinemas</a></li>
                <li><a href="html/food.html">Food</a></li>
                <li><a href="html/rewards.html">Rewards</a></li>
                <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">
                        <i class="">BAR</i></a>
                    <div class="dropdown-content">
                        <a href="#">About Us</a>
                        <a href="#">Contact Us</a>
                        <a href="#">FAQs</a>
                    </div>
                </li>
                <li><a><img src="images/bell.png"/></a></li>
                <li><a><img src="images/search.png"/></a></li>
                <li><a href="login.html" id="signin-button">Sign In</a></li>
                <script>
                    document.getElementById("signin-button").addEventListener("click", function() {
                        window.location.href = "login.html";
                    });
                </script>
            </ul>
            
        </ul>`);
    } else {
        topnav.innerHTML = (
            `<ul>
            <li class="logo_bg"><a href="index.html" class="logo_header" class="active"><span>TAR</span>Cinemas&#174</a></li>
            <ul style="float:right;">
                <li><a href="html/movies.html">Movies</a></li>
                <li><a href="html/promotions.html">Promotions</a></li>
                <li><a href="html/cinemas.html">Cinemas</a></li>
                <li><a href="html/food.html">Food</a></li>
                <li><a href="html/rewards.html">Rewards</a></li>
                <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">
                        <i class="">BAR</i></a>
                    <div class="dropdown-content">
                        <a href="#">About Us</a>
                        <a href="#">Contact Us</a>
                        <a href="#">FAQs</a>
                    </div>
                </li>
                <li><a><img src="images/bell.png"/></a></li>
                <li><a><img src="images/search.png"/></a></li>
                <li><a href="login.html" id="signin-button">Profile</a></li>
                <script>
                    document.getElementById("signin-button").addEventListener("click", function() {
                        window.location.href = "login.html";
                    });
                </script>
            </ul>
            
        </ul>`);
        
    }




}

function checkLoggedIn() {
    if (sessionStorage.getItem("email")) {
        console.log(sessionStorage.getItem("email"));
        changeNav(true);
    }else{
        changeNav(false);
    }
}

function saveLastPage() {
    sessionStorage.setItem("lastpage", window.location.href);
}

function logout() {
    sessionStorage.clear();
    window.location.reload();
}

saveLastPage();
checkLoggedIn();