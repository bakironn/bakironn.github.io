<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>video archive</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
        }
        #sidebar {
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
            width: 200px;
            background-image: url("image/skyblue dot.jpg");
            padding: 20px;
            overflow-y: auto;
        }
        #sidebar h2 {
            text-align: center;
        }
        #sidebar ul {
            list-style: none;
            padding: 0;
        }
        #sidebar ul li {
            margin: 10px 0;
        }
        #sidebar ul li a {
            text-decoration: none;
            color: black;
            padding: 5px 10px;
            border-radius: 5px;
            transition: background-color 0.3s;
        }
        #sidebar ul li a:hover {
            background-color: #0056b3;
            color: white;
        }
        #nav {
        background-color: rgba(255, 255, 255, 0.5);
        padding: 15px;
        border-radius: 8px;
        }
        #content {
            margin-left: 220px;
            padding: 40px 40px;
        }
        #header {
            background-image: url("image/Pattern.jpg");
            text-align: center;
            padding: 30px;
            border-radius: 515px;
            margin-bottom: 40px;
        }
        .category {
            margin-bottom: 20px;
            border-radius: 15px;
            background-color: #fff6a5;
            padding: 15px;
        }
        .subcategory {
            margin-top: 10px;
            padding-left: 20px;
        }
        .videos {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
            gap: 15px;
            margin-top: 10px;
            justify-items: center;
        }
        .video iframe {
            width: 560px;
            height: 315px;
            border-radius: 15px;
        }
    </style>
</head>
<body>
    <div id="sidebar">
        <h2>목차</h2>
        <div id="nav" class="nav">
        <ul>
            <li><a href="#section1">🤣 웃긴 영상</a></li>
            <li><a href="#section2">💕 귀여운 영상</a>
                <ul>
                    <li><a href="#section2-1">&nbsp;&nbsp;&nbsp;🐶 동물</a></li>
                    <li><a href="#section2-2">&nbsp;&nbsp;&nbsp;🎅 사람</a></li>
                </ul>
            </li>
            <li><a href="#section3">🍯 꿀팁</a></li>
            <li><a href="#section4">🎵 음악</a>
                <ul>
                    <li><a href="#section4-1">&nbsp;&nbsp;&nbsp;🎧 음원</a></li>
                    <li><a href="#section4-2">&nbsp;&nbsp;&nbsp;🎸 라이브/커버</a></li>
                    <li><a href="#section4-3">&nbsp;&nbsp;&nbsp;🎼 플레이리스트</a></li>
                </ul>
            </li>
        </ul>
        </div>
        <hr><br>
            충남대학교<br>
            경영학부<br>
            202401549<br>
            박혜련
    </div>
    <div id="content">
        <div id="header" style="margin-left: 20px; margin-right: 20px;">
            <img id="largerImage" src="./image/ham.jpg"><br>
                <script>
                    let image = document.getElementById("largerImage");
                    image.onmousedown = larger;
                    image.onmouseup = back;
                    function larger() {
                        image.style.transform = "scale(2, 2)";
                    } 
                    function back() {
                        image.style.transform = "scale(1, 1)";
                    } 
                </script>
            </body>
            <span style="color:rgb(106, 104, 104)"><small>↑ 누르면 커져요!!</small></span>
            <h1>Video Archive ✨</h1>
            <span style="color:rgb(51, 51, 51)"></span>안녕하세요! 방문해주셔서 감사합니다. 이곳에서는 저의 취향이 담긴 영상들을 공유합니다.<br>
            재밌게 감상하시고 오늘도 좋은 하루 보내세요.🍀</span>

        </div>

        <div id="section1" class="category" style="margin-left: 20px; margin-right: 20px;">
            <h2>🤣 웃긴 영상</h2>
            <div class="videos">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/3ur-19op4FY?si=SkBWQG65V9wlN3UW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/na3kswvVbq8?si=BQapTfbQ8T-fa0Jq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
               
            </div>
        </div>

        <div id="section2" class="category" style="margin-left: 20px; margin-right: 20px;">
            <h2>💕 귀여운 영상</h2>
            <div id="section2-1" class="subcategory">
                <h3>🐶 동물</h3>
                <div class="videos">
             
                </div>
            </div>
            <div id="section2-2" class="subcategory">
                <h3>🎅 사람</h3>
                <div class="videos">
                </div>
            </div>
        </div>

        <div id="section3" class="category" style="margin-left: 20px; margin-right: 20px;">
            <h2>🍯 꿀팁</h2>
            <div class="videos">
                <iframe width="560" height="315" src="https://youtube.com/embed/jGGdNInRRRo?si=ue-nUGKO6_jJYO4L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <iframe width="560" height="315" src="https://youtube.com/embed/uI0RaTtYsaM?si=c99RKBYwocEzVNWP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>                
                <iframe width="560" height="315" src="https://youtube.com/embed/04BuoPBZODk?si=8C5q9QCFgKapUjAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                
            </div>
        </div>

        <div id="section4" class="category" style="margin-left: 20px; margin-right: 20px;">
            <h2>🎵 음악</h2>
            <div id="section4-1" class="subcategory">
                <h3>🎧 음원</h3>
                <div class="videos">
           
                </div>
            </div>
            <div id="section4-2" class="subcategory">
                <h3>🎸 라이브/커버</h3>
                <div class="videos">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/LOk4_kI4MjU?si=U6eCpCiC1IOdeAne" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                </div>
            </div>
            <div id="section4-3" class="subcategory">
                <h3>🎼 플레이리스트</h3>
                <div class="videos">

                </div>
            </div>
        </div>
    </div>
</body>
</html>
