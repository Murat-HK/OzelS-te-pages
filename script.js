const startButton = document.getElementById("start-btn");
const welcomeScreen = document.getElementById("welcome-screen");
const photoScreen = document.getElementById("photo-screen");
const gameScreen = document.getElementById("game-screen");
const noButton = document.getElementById("no-button");
const yesButton = document.getElementById("yes-button");
const nextButton = document.getElementById("next-btn");
const videoContainer = document.getElementById("video-container");
const video = document.getElementById("myVideo");

startButton.addEventListener("click", function() {
    welcomeScreen.classList.add("hidden");  // Başlangıç ekranını gizle
    photoScreen.classList.remove("hidden"); // Fotoğraf ekranını göster
});

nextButton.addEventListener("click", function() {
    // Fotoğraf ekranını gizle
    photoScreen.classList.add("hidden");

    // Oyun ekranını göster
    gameScreen.classList.remove("hidden");
});

let speedMultiplier = 1; // "Hayır" butonunun hızını artırmak için

noButton.addEventListener("mouseover", function() {
    const container = document.getElementById("game-container");
    const maxX = container.offsetWidth - noButton.offsetWidth;
    const maxY = container.offsetHeight - noButton.offsetHeight;

    // Hızlı kaçma efekti için artırılmış rastgelelik
    const randomX = Math.random() * maxX * speedMultiplier;
    const randomY = Math.random() * maxY * speedMultiplier;

    // Butonun ekran dışına çıkmasını engelle
    noButton.style.position = "absolute";
    noButton.style.left = `${Math.min(randomX, maxX)}px`;
    noButton.style.top = `${Math.min(randomY, maxY)}px`;

    // Buton kaçtıkça hızı artır
    speedMultiplier += 0.2;
});

yesButton.addEventListener("click", function() {
    // Oyun ekranını gizle
    gameScreen.classList.add("hidden");

    // Video ekranını göster
    videoContainer.classList.remove("hidden");

    // Videoyu sessiz başlat ve otomatik oynat
    video.muted = true;
    video.play();
    setTimeout(() => {
        video.muted = false;
    }, 500);
});
