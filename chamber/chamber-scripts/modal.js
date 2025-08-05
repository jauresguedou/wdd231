// Open the dialog when its card link is clicked
    document.querySelectorAll('.membership-cards a').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const dlg = document.getElementById(link.getAttribute('href').substring(1));
        dlg.showModal();
      });
    });

    // Close the dialog when its Close button is clicked
    document.querySelectorAll('button[data-close]').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.closest('dialog').close();
      });
    });

    // Close if user clicks outside the content
    document.querySelectorAll('dialog').forEach(dlg => {
      dlg.addEventListener('click', e => {
        const rect = dlg.getBoundingClientRect();
        if (
          e.clientX < rect.left ||
          e.clientX > rect.right ||
          e.clientY < rect.top ||
          e.clientY > rect.bottom
        ) {
          dlg.close();
        }
      });
    });