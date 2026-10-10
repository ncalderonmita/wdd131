const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const subMenuButton = document.querySelector('#submenu');
const sbNavigation = document.querySelector('.sb-navigation');

if (subMenuButton && sbNavigation) {
    subMenuButton.addEventListener('click', () => {
        subMenuButton.classList.toggle('open');
        sbNavigation.classList.toggle('open');
    });
}

const members = [
  {
    nickName: "Rony",
    dedicated: "2025, August, 8",
    tekken_prowess: 436727,
    imageUrl: "images/rjr-rony.webp",
    width: "450",
    height: "413"
  },
  {
    nickName: "Ferlars",
    dedicated: "2025, August, 8",
    tekken_prowess: 370640,
    imageUrl: "images/rjr-ferlars.webp",
    width: "450",
    height: "413"
  },

  {
    nickName: "Jonathas",
    dedicated: "2025, August, 8",
    tekken_prowess: 364933,
    imageUrl: "images/rjr-jonathas.webp",
    width: "450",
    height: "413"
  },

  {
    nickName: "HellSpine",
    dedicated: "2025, October, 19",
    tekken_prowess: 349028,
    imageUrl: "images/rjr-hellspine.webp",
    width: "450",
    height: "413"
  },

  {
    nickName: "Ian",
    dedicated: "2026, January, 11",
    tekken_prowess: 368784,
    imageUrl: "images/rjr-ian.webp",
    width: "450",
    height: "413"
  },

  {
    nickName: "Predator-X",
    dedicated: "2026, June, 19",
    tekken_prowess: 389791,
    imageUrl: "images/rjr-predatorx.webp",
    width: "450",
    height: "413"
  },

  {
    nickName: "Paco",
    dedicated: "2026, June, 21",
    tekken_prowess: 371578,
    imageUrl: "images/rjr-paco.webp",
    width: "450",
    height: "413"
  },
  
  {
    nickName: "Angel",
    dedicated: "2026, June, 21",
    tekken_prowess: 119603,
    imageUrl: "images/rjr-angel.webp",
    width: "450",
    height: "413"
  },
{
    nickName: "MarvinKookie",
    dedicated: "2026, September, 14",
    tekken_prowess: 376058,
    imageUrl: "images/rjr-marvink.webp",
    width: "450",
    height: "413"
  },
];






// HERE

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.team-container');
  const navLinks = document.querySelectorAll('.sb-navigation a');
  const titleName = document.querySelector('.home-title');

  if (!container) return;

  const displayMembers = (filteredMembers) => {
    container.innerHTML = '';
    filteredMembers.forEach(member => {
      const card = document.createElement('div');
      card.className = 'member-card';
      card.innerHTML = `
        <h4>${member.nickName}</h4>
        <img src="${member.imageUrl}" loading="lazy" width="${member.width}" height="${member.height}" alt="RJR | ${member.nickName}">
        
        <div class="member-information">
          <p>Join in: ${member.dedicated}</p>
          <p>Tekken Prowess: ${member.tekken_prowess.toLocaleString()} points </p>
        </div>
      `;
      container.appendChild(card);
    });
  };

  
  const getYearFromDedicated = (dedicatedStr) => {
    const parts = dedicatedStr.split(',').map(item => item.trim());
    return parseInt(parts[0], 10); 
  };

  const filterMembers = (criteria) => {
    let filteredMembers = members;
    
    switch (criteria) {
      case 'veterans':
        filteredMembers = members.filter(member => getYearFromDedicated(member.dedicated) < 2026);
        if (titleName) titleName.textContent = 'Old Members';
        break;
      
      case 'newbies':
        filteredMembers = members.filter(member => getYearFromDedicated(member.dedicated) >= 2026);
        if (titleName) titleName.textContent = 'New Members';
        break;
      
      case 'most-powerful':
        filteredMembers = members.filter(member => member.tekken_prowess > 370000);
        if (titleName) titleName.textContent = 'Super Powerful Members';
        break;
      
      case 'medium-powerful':
        filteredMembers = members.filter(member => member.tekken_prowess < 370000);
        if (titleName) titleName.textContent = 'Powerful Members';
        break;
      
      default:
        filteredMembers = members;
        if (titleName) titleName.textContent = 'Know Us'; 
        break;
    }
    displayMembers(filteredMembers);
  };

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navLinks.forEach(nav => nav.classList.remove('active'));
      e.target.classList.add('active');
      filterMembers(e.target.id);
    });
  });

  filterMembers('know us'); 
});