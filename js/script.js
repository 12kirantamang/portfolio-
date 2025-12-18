  document.querySelector(".typewriter").textContent =
        "A Developer";

      const buttons = document.querySelectorAll(".read-more-btn");
      buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const currentActivity = btn.parentElement;
          const wasActive = currentActivity.classList.contains("active");

          buttons.forEach((b) => b.parentElement.classList.remove("active"));

          if (!wasActive) {
            currentActivity.classList.add("active");
          }
        });
      });
