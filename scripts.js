const hamster = document.getElementById("hamster");
const food = document.getElementById("food");

food.addEventListener("click", () => {
    food.src = "./image/after1.png";
    setTimeout(() => {
        food.src = "./image/after2.png";
        setTimeout(() => {
            alert("햄스터가 먹이를 다 먹었어요! 햄스터를 쓰다듬어보세요. 🐹👈");
        }, 1000);
    }, 2000);
});

hamster.addEventListener("click", () => {
    hamster.src = "./image/flowerham.jpg";
    setTimeout(() => {
        alert("배부른 햄스터가 당신에게 꽃을 선물했어요! 💐🌼");
    }, 500);
});

document.getElementById('fortuneButton').addEventListener('click', function() {
    window.location.href = 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%98%A4%EB%8A%98%EC%9D%98+%EC%9A%B4%EC%84%B8';
});
