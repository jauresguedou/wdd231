async function loadCards() {
    try {
      const response = await fetch('data/items.json');
      if (!response.ok) throw new Error(`HTTP ${response.status} – ${response.statusText}`);
      const cardsData = await response.json();

      const container = document.getElementById("cards-container");
      container.innerHTML = ''; // clear any existing content

      cardsData.forEach(item => {
        // Card wrapper
        const card = document.createElement("div");
        card.className = "card";

        // Title
        const title = document.createElement("h2");
        title.textContent = item.name;
        card.appendChild(title);

        // Figure + Image (with native lazy-loading)
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.src = item.address;
        img.alt = item.name;
        img.loading = "lazy";
        figure.appendChild(img);
        card.appendChild(figure);

        // Address
        const addr = document.createElement("address");
        addr.textContent = item.address || "No image available";
        card.appendChild(addr);

        // Description
        const desc = document.createElement("p");
        desc.innerHTML = item.description
          .split("\n\n")
          .map(para => para.replace(/\n/g, "<br>"))
          .join("<br><br>");
        card.appendChild(desc);

        // Learn more button
        const btn = document.createElement("button");
        btn.textContent = "Learn more";
        card.appendChild(btn);

        container.appendChild(card);
      });
    } catch (err) {
      console.error("Failed to load cards data:", err);
    }
  }

  
  loadCards();











  