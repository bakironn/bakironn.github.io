// document.getElementById('hamsterButton').addEventListener('click', () => {
//     alert('행운의 햄스터 볼을 꼬집었군요! 좋은 하루 되세요! 😊');
// });

    const hamster = document.getElementById("hamster");
    const food = document.getElementById("food");

    // 먹이를 클릭하면 먹이 이미지가 바뀜
    food.addEventListener("click", () => {
        food.src = "./image/after.png"; // 먹힌 상태의 먹이 사진
        setTimeout(() => {
            food.style.opacity = "0.5"; // 먹이를 반투명하게
            alert("햄스터가 먹이를 먹었어요! 햄스터를 쓰다듬어보세요");
        }, 500); // 약간의 딜레이 추가
    });

    // 햄스터를 클릭하면 경고창 메시지 출력
    hamster.addEventListener("click", () => {
        alert("배부른 햄스터가 당신에게 행운을 가져다줍니다! 🍀");
    });




