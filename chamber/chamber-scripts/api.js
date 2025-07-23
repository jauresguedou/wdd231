// grab your container once
const container = document.getElementById('cards');

async function loadMembers() {
  try {
    const resp = await fetch('data/members.json');
    const members = await resp.json();

    // Fisher-Yates shuffle
    for (let i = members.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [members[i], members[j]] = [members[j], members[i]];
    }

    // pick only three
    const selection = members.slice(0, 3);

    container.innerHTML = '';
    selection.forEach(member => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <img src="${member.icon}" alt="${member.name} logo">
        <h2>${member.name}</h2>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">${member.website}</a>
        <p>${['Member', 'Silver', 'Gold'][member.membership_level - 1]}</p>
      `;
      container.appendChild(card);
    });
  } catch (err) {
    console.error('Failed to load members:', err);
  }
}

loadMembers();
