
document.addEventListener("DOMContentLoaded", () => {
  const MS_PER_DAY = 24 * 60 * 60 * 1000;
  const now = Date.now();
  const lastVisit = localStorage.getItem("lastVisit");
  let message = "";

  if (!lastVisit) {
    
    message = "Welcome! Let us know if you have any questions.";
  } else {
    const elapsed = now - parseInt(lastVisit, 10);

    if (elapsed < MS_PER_DAY) {
      
      message = "Back so soon! Awesome!";
    } else {
      
      const days = Math.floor(elapsed / MS_PER_DAY);
      message = `You last visited ${days} ${days === 1 ? "day" : "days"} ago.`;
    }
  }

  // Save the current timestamp for next visit
  localStorage.setItem("lastVisit", now.toString());

  // Inject the message into your sidebar
  // Assumes you have an element like <aside class="sidebar"></aside> in your HTML
  const sidebar = document.querySelector(".sidebar");
  if (sidebar) {
    const wrapper = document.createElement("div");
    wrapper.id = "visit-message";
    wrapper.textContent = message;

    // Optional: style it or add a close button
    // wrapper.style.padding = "1rem";
    // wrapper.style.background = "#eef";
    // wrapper.style.border = "1px solid #ccd";

    sidebar.appendChild(wrapper);
  }
});
