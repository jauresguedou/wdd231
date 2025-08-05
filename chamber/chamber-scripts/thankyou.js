// grab query string, pull out the required fields, and insert into the page
    document.addEventListener("DOMContentLoaded", () => {
      const params = new URLSearchParams(window.location.search);

      // helper to set text content
      function fill(id, key) {
        const el = document.getElementById(id);
        el.textContent = params.get(key) || '—';
      }

      fill("out-first-name",   "first-name");
      fill("out-last-name",    "last-name");
      fill("out-email",        "email");
      fill("out-mobile-phone", "mobile-phone");
      fill("out-organization-name", "organization-name");
      fill("timestamp",    "timestamp");
    });