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

  const lines = ["The best preparation for tomorrow is doing your best today."];
  const lines2 = ["每個今天都比昨天更進步", "持續前進，就是給自己最好的鼓勵"];

  const speed = 80;
  const lineDelay = 500;

  const mainTitleEl = document.getElementById("mainTitle");
  const subTitleEl = document.getElementById("subTitle");

  // 第一段打字
  function typeLines(lines, element, onComplete) {
    let lineIndex = 0;
    let charIndex = 0;
    let currentLineDiv = document.createElement("div");
    currentLineDiv.classList.add("cursor"); // 初始游標加在第一行
    element.appendChild(currentLineDiv);

    function typeLine() {
      if (lineIndex >= lines.length) {
        currentLineDiv.classList.remove("cursor"); // 打完移除游標
        element.classList.add("done");
        if (onComplete) onComplete();
        return;
      }

      const currentLine = lines[lineIndex];

      if (charIndex < currentLine.length) {
        currentLineDiv.textContent += currentLine.charAt(charIndex);
        charIndex++;
        setTimeout(typeLine, speed);
      } else {
        currentLineDiv.classList.remove("cursor"); // 移除上一行游標

        lineIndex++;
        charIndex = 0;

        if (lineIndex < lines.length) {
          currentLineDiv = document.createElement("div");
          currentLineDiv.classList.add("cursor");
          element.appendChild(currentLineDiv);
        }

        setTimeout(typeLine, lineDelay);
      }
    }

    typeLine();
  }

  // 先打主標，再打副標
  typeLines(lines, mainTitleEl, () => {
    typeLines(lines2, subTitleEl);
  });
});
