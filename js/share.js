document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      const item = link.querySelector(".item");
      if (item) {
        item.classList.add("active");
      }
    }
  });

  const burger = document.getElementById("burger");
  const header = document.getElementById("mainHeader");
  burger.addEventListener("click", function () {
    header.classList.toggle("active");
    burger.classList.toggle("active");
  });

  const videos = document.querySelectorAll(".preview-video");
  videos.forEach((video) => {
    video.addEventListener("mouseenter", () => video.play());
    video.addEventListener("mouseleave", () => {
      video.pause();
      video.currentTime = 0; // 滑開時回到開頭
    });
  });
});
