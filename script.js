// Copy phone number to clipboard
document.getElementById("phone").addEventListener("click", function () {
  navigator.clipboard.writeText(this.textContent.trim()).then(() => {
    alert("Phone number copied!");
  });
});

// Copy email to clipboard
document.getElementById("copyEmail").addEventListener("click", function () {
  const email = document.getElementById("emailLink").textContent.trim();
  navigator.clipboard.writeText(email).then(() => {
    alert("Email copied!");
  });
});

// Download vCard
// document.getElementById("downloadVCard").addEventListener("click", function () {
//   const vcard = `
// BEGIN:VCARD
// VERSION:3.0
// FN:Panchanand Jha
// ORG:Software Development Engineer in Test | Researcher
// TEL:+918309367652
// EMAIL:abounty@gmail.com
// URL:https://linkedin.com/in/panchanand-jha
// END:VCARD
//   `.trim();

//   const blob =


  // Resume modal
const viewBtn = document.getElementById('viewResume');
const modal = document.getElementById('resumeModal');
const closeBtn = document.getElementById('closeResume');

if (viewBtn) {
  viewBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });
}
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
}
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});


// Disable right-click everywhere inside resume
document.querySelector(".resume-pages")?.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});


// Project filtering
document.addEventListener("DOMContentLoaded", () => {
  const filterTags = document.querySelectorAll(".filters .tag");
  const projects = document.querySelectorAll(".project-item");

  filterTags.forEach(tag => {
    tag.addEventListener("click", () => {
      // Remove 'active' from all tags
      filterTags.forEach(t => t.classList.remove("active"));
      // Add 'active' to clicked tag
      tag.classList.add("active");

      const filter = tag.getAttribute("data-filter");

      projects.forEach(project => {
        const tags = project.getAttribute("data-tags").split(",");

        if (filter === "all" || tags.includes(filter)) {
          project.style.display = "block"; // Show project
        } else {
          project.style.display = "none"; // Hide project
        }
      });
    });
  });
});
