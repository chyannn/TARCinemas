<!DOCTYPE html>

<head>
    <meta charset="UTF-8">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Phone size diff need this to adjust -->
    <link rel="stylesheet" href="/TARCINEMA/css/index.css">
    <link rel="stylesheet" href="/TARCINEMA/css/general_style.css">
    <title>TAR CInema</title>
</head>

<body>
    
    <div class="topnav" id="myTopnav">
        <ul>
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
            
        </ul>
    </div>

    <main>
        <div id="slideshow">
            <img src="slideshow_image.jpg" alt="Movie Slideshow" usemap="#movie-map">
            <map name="movie-map">
                <area shape="rect" coords="x1,y1,x2,y2" alt="Movie 1" href="movie1.html">
                <area shape="rect" coords="x3,y3,x4,y4" alt="Movie 2" href="movie2.html">
                <!-- Add more areas for other movies -->
            </map>
        </div>

        <div id="chatbot-icon">
            <img src="bot-icon.png" alt="Chatbot">
        </div>
          
        <div id="chat-container">
            <div id="chat-messages"></div>
            <input type="text" id="user-input" placeholder="Type your message...">
            <button id="send-button">Send</button>
        </div>

    </main>

    <div class="contactabout">
        <div class="aboutus">
            <table>
                <tr>
                    <td class="cusaus">
                        About Us
                    </td>
                </tr>
                <tr>
                    <td>
                        Welcome to TAR-Cinema,
                    </td>
                </tr>
                <tr>
                    <td>
                        Experience true warmth and create lasting memories with us..
                    </td>
                </tr>
                <tr>
                    <td>
                        Come as guests, leave as family.
                    </td>
                <tr>
                    <td>
                        We're dedicated to perform the very best of our service...
                    </td>
                </tr>
                <tr>
                    <td><a href="/html/aboutUs.html" class="readmore">Read More</a></td>
                </tr>
            </table>

        </div>

        <div class="contactus">

            <table>
                <tr>
                    <td class="cusaus" colspan="3">Contact Us</td>
                </tr>
                <tr>
                    <td>&#9993;</td>
                    <td class="contactdetail">Email</td>
                    <td>tarcinema@customerservice.com </td>
                </tr>
                <tr>
                    <td> &#9743;</td>
                    <td class="contactdetail">Phone</td>
                    <td>+60 1-888-88-88 </td>
                </tr>
                <tr>
                    <td>&#128439;</td>
                    <td class="contactdetail">Fax</td>
                    <td>888-85785785</td>
                </tr>
                <tr>
                    <td>&#x1F559;</td>
                    <td class="contactdetail">Operating Hours</td>
                    <td>Weekdays & Weekends 0700-0000</td>
                </tr>
                <tr>
                    <td>&#128506;</td>
                    <td class="contactdetail">Address</td>
                    <td>77,Lorong Lembah Permai 3,11200 Tanjung Bungah,Penang
                    </td>
                <tr>
                    <td colspan="2"><a href="/html/contactUs.html" class="readmore">Read More</a></td>
                </tr>

            </table>
        </div>
    </div>



</body>


<footer>
    <div class="footer">
        <hr class="footer_start">
        <a href="#" class="fa fa-facebook" style=" font-size: 20px;"></a>
        <a href="#" class="fa fa-twitter" style=" font-size: 20px;"></a>
        <a href="#" class="fa fa-instagram" style=" font-size: 20px;"></a>

        <h2 class="footername">TAR CINEMA OFFICIAL WEBSITE</h2>
        <a href="https://www.google.com/maps/place/Tunku+Abdul+Rahman+University+College/@3.2161697,101.7268329,17z/data=!3m1!4b1!4m5!3m4!1s0x31cc3843bfb6a031:0x2dc5e067aae3ab84!8m2!3d3.2161643!4d101.7290216"
            class="footeraddress" target="_blank">77, Lorong Lembah Permai 3, 11200 Tanjung Bungah, Pulau Pinang, Malaysia
        </a>
        <h3 class="footercopy">Copyright &#169; 2023 TAR STAY. All rights reserved &#174;</h3>
    </div>

</footer>
