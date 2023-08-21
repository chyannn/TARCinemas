<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Phone size diff need this to adjust -->
    <link rel="stylesheet" type="text/css" href="/TARCINEMA/css/index.css"/>
    <title>TAR Cinema</title>
</head>


<script>
    let slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("moviesBanner");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";

    }
</script>

<header>
    <div class="logo_nav" id="logo_nav">
        <ul>
            <li class="logo_bg">
                <a href="index.html" class="logo_header" class="active" width="150%">
                    <span>&nbsp;TAR</span>Cinemas&#174
                </a>
            </li>
            <a href="login.html" class="signin-button" type="button" style="float: right;">SIGN IN</a>
        </ul>

    </div>
</header>

<body>
    <div class="topnav" id="myTopnav">
        <ul>
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
                     <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
                </li>
                <li><a><img src="/TARCINEMA/images/bell.png" width="20%"/></a></li>
                <li><a><input type="text" placeholder=" Movies/Cinemas"></a></li>
            </ul>
            
        </ul>
    </div>

    <section>
        <div class="slideshow_container">
            <!-- Full-width images with number text -->
            <div class="moviesBanner">
                <img src="/TARCINEMA/images/moviebanner1.jpg" width="100%">
            </div>
            <div class="moviesBanner">
                <img src="/TARCINEMA/images/moviebanner2.jpg" width="100%">
            </div>
            <div class="moviesBanner">
                <img src="/TARCINEMA/images/moviebanner3.jpg" width="100%">
            </div>
        </div>

        <!-- Next and previous buttons -->
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </section>

    <main>
        
        

        <h3 style="color: white;"> NOW SHOWING </h3>

        <div class="poster_row">
            <div class="poster_container">

                <img src="/TARCINEMA/images/movieposter1.jpg" alt="Movies" class="poster" style="width:100%">
                
                <div class="movies_info"> <!--middle change to movies_info-->
                  <div class="info">Movie Name</div> <!--text change to info-->
                </div>
            </div>
            <div class="poster_container">
                <img src="/TARCINEMA/images/movieposter2.jpg" alt="Movies" class="poster" style="width:100%">
                
                <div class="movies_info"> <!--middle change to movies_info-->
                  <div class="info">Movie Name</div> <!--text change to info-->
                </div>
            </div>
                
            <div class="poster_container">
                <img src="/TARCINEMA/images/movieposter3.jpg" alt="Movies" class="poster" style="width:100%">
                
                <div class="movies_info"> <!--middle change to movies_info-->
                  <div class="info">Movie Name</div> <!--text change to info-->
                </div>
            </div>
        </div>

    </main>

</body>


</html>
