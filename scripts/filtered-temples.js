const year = document.querySelector("#currentyear");
const today = new Date();
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

if (year) {
  year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
}

const lastModifiedEl = document.getElementById("lastModified");
if (lastModifiedEl) {
  lastModifiedEl.textContent = document.lastModified;
}

hamButton?.addEventListener('click', () => {
	navigation?.classList.toggle('open');
	hamButton?.classList.toggle('open');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
    width: "400",
    height: "250"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
    width: "400",
    height: "250"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
    width: "400",
    height: "250"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
    width: "400",
    height: "250"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
    width: "400",
    height: "250"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
    width: "400",
    height: "250"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
    width: "400",
    height: "250"
  },
  {
    templeName: "Cochabamba Bolivia",
    location: "Cochabamba, Bolivia",
    dedicated: "2000, April, 30",
    area: 35500,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/cochabamba-bolivia-temple/cochabamba-bolivia-temple-13720.jpg",
    width: "400",
    height: "250"
  },
  {
    templeName: "Okinawa Japan Temple",
    location: "Okinawa, Japan",
    dedicated: "2023, November, 12",
    area: 12437,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/okinawa-japan-temple/okinawa-japan-temple-40255.jpg",
    width: "400",
    height: "250"
  },
  {
    templeName: "Boston Massachusetts",
    location: "Massachusetts, United States",
    dedicated: "2000, October, 1",
    area: 69600,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/boston-massachusetts-temple/boston-massachusetts-temple-62343.jpg",
    width: "400",
    height: "250"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const navLinks = document.querySelectorAll('.navigation a');
  const titleName = document.querySelector('.home-title');

  if (!container) return;

  const displayTemples = (filteredTemples) => {
    container.innerHTML = '';
    filteredTemples.forEach(temple => {
      const card = document.createElement('div');
      card.className = 'temple-card';
      card.innerHTML = `
        <img src="${temple.imageUrl}" loading="lazy" width="${temple.width}" height="${temple.height}" alt="${temple.templeName} Temple">
        <div class="temple-information">
          <h2>${temple.templeName}</h2>
          <p>Location: ${temple.location}</p>
          <p>Dedicated: ${temple.dedicated}</p>
          <p>Area: ${temple.area.toLocaleString()} sq ft </p>
        </div>
      `;
      container.appendChild(card);
    });
  };

  
  const getYearFromDedicated = (dedicatedStr) => {
    const parts = dedicatedStr.split(',').map(item => item.trim());
    return parseInt(parts[0], 10); 
  };

  const filterTemples = (criteria) => {
    let filteredTemples = temples;
    
    switch (criteria) {
      case 'old':
        filteredTemples = temples.filter(temple => getYearFromDedicated(temple.dedicated) < 1900);
        if (titleName) titleName.textContent = 'Old Temples';
        break;
      
      case 'new':
        filteredTemples = temples.filter(temple => getYearFromDedicated(temple.dedicated) > 2000);
        if (titleName) titleName.textContent = 'New Temples';
        break;
      
      case 'large':
        filteredTemples = temples.filter(temple => temple.area > 90000);
        if (titleName) titleName.textContent = 'Large Temples';
        break;
      
      case 'small':
        filteredTemples = temples.filter(temple => temple.area < 10000);
        if (titleName) titleName.textContent = 'Small Temples';
        break;
      
      default:
        filteredTemples = temples;
        if (titleName) titleName.textContent = 'Home'; 
        break;
    }
    displayTemples(filteredTemples);
  };

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navLinks.forEach(nav => nav.classList.remove('active'));
      e.target.classList.add('active');
      filterTemples(e.target.id);
    });
  });

  filterTemples('home'); 
});
