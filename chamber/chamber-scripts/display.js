const gridBtn = document.getElementById('grid-view');
const listBtn = document.getElementById('list-view');
const container = document.querySelector('.cards');

gridBtn.addEventListener('click', () => container.classList.add('grid'));
listBtn.addEventListener('click', () => container.classList.remove('grid'));

async function loadMembers() {
  try {
    const response = await fetch('data/members.json');
    const members = await response.json();
    container.innerHTML = '';
    members.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('card');
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
  } catch (error) {
    console.error('Failed to load members:', error);
  }
}

loadMembers();
